<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  // import { LoginType, trackAuthStart, trackLoginStart } from '@/analytics/events/general'
  // import { trackSignupStart } from '@/analytics/events/onboarding'
  // import { mutateEmailLogin } from '@/api/login'
  // import InputWithIcon from '@/ui/InputWithIcon.svelte'
  import Input from '$ui/core/Input/index.js'

  export let verifiedEmail = ''
  export let isSignUp
  export let from = ''

  let email = ''
  let loading = false

  function onSubmit({ currentTarget }) {
    email = currentTarget.email.value
    loading = true

    const redirectUrl = new URL(from || '/', window.location.origin)
    mutateEmailLogin(email, undefined, undefined, redirectUrl.href).then(onSuccess)

    trackAuthStart(LoginType.EMAIL)

    if (isSignUp) {
      trackSignupStart(LoginType.EMAIL)
    } else {
      trackLoginStart(LoginType.EMAIL)
    }
  }

  function onSuccess({ emailLogin }) {
    loading = false
    if (emailLogin.success) verifiedEmail = email
  }
</script>

<form on:submit|preventDefault={onSubmit}>
  <Input type="email" placeholder="Your email" icon="envelope" name="email" />

  <Button variant="fill" size="lg" class="mt-4 w-full justify-center row" type="submit" {loading}>
    {isSignUp ? 'Sign up' : 'Log in'}
  </Button>
</form>
