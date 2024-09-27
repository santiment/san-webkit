<script lang="ts">
  import { tap, catchError, finalize, exhaustMap, from, of } from 'rxjs'
  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/Input.svelte'
  import { cn } from '$ui/utils/index.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'
  import { mutateEmailLoginNewsletter } from './api.js'

  const { class: className = '', label = 'Leave request' }: { class?: string; label?: string } =
    $props()

  let loading = $state(false)

  const submitEmail = useObserveFnCall<string>(() =>
    exhaustMap((email) => {
      loading = true

      return from(mutateEmailLoginNewsletter()({ email })).pipe(
        catchError((error) => of(null).pipe(tap(() => console.error(error)))),
        finalize(() => (loading = false)),
      )
    }),
  )

  const handleSubmit = (event: SubmitEvent) => {
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
  <Button type="submit" variant="fill" class="fill-white" --loading-color="white" {loading}
    >{label}</Button
  >
</form>
