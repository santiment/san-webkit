<script lang="ts">
  import { tap, catchError, exhaustMap, of } from 'rxjs'

  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/index.js'
  import { cn } from '$ui/utils/index.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { notification } from '$ui/core/Notifications/index.js'
  import Turnstile from '$ui/app/LoginForm/Turnstile.svelte'

  import { mutateEmailLoginNewsletter } from './api.js'

  type TProps = {
    class?: string
    label?: string
  }

  const { class: className = '', label = 'Leave request' }: TProps = $props()

  let Turnstile$: Turnstile
  let loading = $state(false)

  const submitEmail = useObserveFnCall<{ email: string; token: string }>(() =>
    exhaustMap(({ email, token }) => {
      loading = true

      return mutateEmailLoginNewsletter()({ email, token }).pipe(
        catchError((error) => {
          console.error(error)
          Turnstile$.reset()
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

  async function handleSubmit(event: SubmitEvent) {
    event.preventDefault()

    const form = event.currentTarget as HTMLFormElement
    const formData = new FormData(form)
    const email = formData.get('email')

    if (!email || typeof email !== 'string') return

    const token = await Turnstile$.getToken().catch(() => null)
    if (!token) {
      notification.error('Invalid turnstile token')
      return
    }

    submitEmail({ email, token })
  }
</script>

<Turnstile bind:this={Turnstile$}></Turnstile>

<form
  class={cn(
    'flex rounded-lg border bg-white py-[3px] pl-1.5 pr-1 text-base text-black md:text-base',
    className,
  )}
  onsubmit={handleSubmit}
>
  <Input
    class="flex-1 rounded-md border-none"
    inputClass="p-1.5"
    name="email"
    type="email"
    value=""
    placeholder="Enter your email"
  />

  <Button
    type="submit"
    accent="custom"
    variant="fill"
    class="h-9 fill-white"
    --loading-color="white"
    {loading}>{label}</Button
  >
</form>
