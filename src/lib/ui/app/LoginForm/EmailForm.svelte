<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/index.js'

  import { useEmailLogin } from './email.svelte.js'
  import Turnstile from './Turnstile.svelte'

  type TProps = {
    isSignUp?: boolean
    from?: string
    onSuccess: (email: string) => void
  }

  const { from, isSignUp = false, onSuccess }: TProps = $props()

  const { loading, loginEmail } = useEmailLogin()

  let turnstileRef: Turnstile

  async function onsubmit(event: SubmitEvent) {
    event.preventDefault()

    const target = event.currentTarget as HTMLFormElement
    const email: string = target.email.value

    const success = await loginEmail({ email, isSignUp, from, turnstileRef })

    if (success) {
      onSuccess(email)
    }
  }
</script>

<Turnstile bind:this={turnstileRef}></Turnstile>

<form {onsubmit}>
  <Input
    type="email"
    placeholder="Enter email"
    icon="envelope"
    name="email"
    class="text-base font-normal text-black placeholder-casper [&>svg]:left-4"
    inputClass="py-2 pl-10 sm:h-12"
    iconSize="16"
  />

  <Button
    variant="fill"
    size="lg"
    class="mt-4 w-full justify-center row sm:h-12"
    type="submit"
    loading={loading.$}
  >
    {isSignUp ? 'Sign up' : 'Log in'}
  </Button>
</form>
