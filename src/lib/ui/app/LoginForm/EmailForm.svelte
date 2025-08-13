<script lang="ts">
  import { trackAuth } from '$lib/analytics/events/auth.js'
  import { Query } from '$lib/api/executor.js'
  import { mutateEmailLogin } from '$lib/flow/login/index.js'
  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/index.js'
  import { notification } from '$ui/core/Notifications/index.js'

  type TProps = {
    isSignUp?: boolean
    from?: string
    onSuccess: (email: string) => void
  }

  const { from, isSignUp = false, onSuccess }: TProps = $props()

  let loading = $state(false)

  function onsubmit(event: SubmitEvent) {
    event.preventDefault()

    const target = event.currentTarget as HTMLFormElement

    const email: string = target.email.value
    const redirectUrl = new URL(from || '/', window.location.origin)

    loading = true
    mutateEmailLogin(Query)({ email, successRedirectUrl: redirectUrl.href })
      .then((success) => {
        if (success) onSuccess(email)
      })
      .catch(() => notification.error("Can't login"))
      .finally(() => (loading = false))

    trackAuth('email', isSignUp)
  }
</script>

<form {onsubmit}>
  <Input
    type="email"
    placeholder="Enter email"
    icon="envelope"
    name="email"
    class="text-base font-normal text-casper [&>svg]:left-4"
    inputClass="py-2 pl-10"
    iconSize="16"
  />

  <Button variant="fill" size="lg" class="mt-4 w-full justify-center row" type="submit" {loading}>
    {isSignUp ? 'Create account' : 'Log in'}
  </Button>
</form>
