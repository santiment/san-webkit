<script>
  import { LoginType, trackLoginStart } from './../../analytics/events/general'
  import { trackSignupStart } from './../../analytics/events/onboarding'
  import { mutateEmailLogin } from './../../api/login'
  import InputWithIcon from './../../ui/InputWithIcon.svelte'

  export let verifiedEmail = ''
  export let isSignUp

  let email = ''
  let loading = false

  function onSubmit({ currentTarget }) {
    email = currentTarget.email.value
    loading = true

    mutateEmailLogin(email).then(onSuccess)

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
  <InputWithIcon
    big
    type="email"
    placeholder="Your email"
    icon="envelope"
    w="16"
    h="12"
    name="email"
  />

  <button class="btn-1 btn--l row h-center fluid mrg-l mrg--t" type="submit" class:loading>
    {isSignUp ? 'Sign up' : 'Log in'}
  </button>
</form>
