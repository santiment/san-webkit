<script lang="ts">
  import { tap, catchError, exhaustMap, of } from 'rxjs'

  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/index.js'
  import { cn } from '$ui/utils/index.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { notification } from '$ui/core/Notifications/index.js'

  import { mutateEmailLoginNewsletter } from './api.js'

  type TProps = {
    class?: string
    label?: string
    accent?: 'green' | 'blue'
  }

  const { class: className = '', label = 'Leave request', accent = 'green' }: TProps = $props()

  let loading = $state(false)

  const submitEmail = useObserveFnCall<string>(() =>
    exhaustMap((email) => {
      loading = true

      return mutateEmailLoginNewsletter()(email).pipe(
        catchError((error) => {
          console.error(error)
          return of(null)
        }),
        tap(() => (loading = false)),
        tap((result) => {
          if (result) {
            notification.success('Verification email was sent to the provided email!')
          }
        }),
      )
    }),
  )

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    const form = event.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get('email')

    if (!email || typeof email !== 'string') return

    submitEmail(email)
  }
</script>

<form
  class={cn(
    'flex rounded border bg-white px-[5px] py-[3px] text-sm text-black md:text-base',
    className,
  )}
  onsubmit={handleSubmit}
>
  <Input
    class="flex-1 border-none"
    inputClass="px-[5px] py-[6px]"
    name="email"
    type="email"
    value=""
    placeholder="Enter your email"
  />
  <Button type="submit" variant="fill" {accent} class="fill-white" --loading-color="white" {loading}
    >{label}</Button
  >
</form>
