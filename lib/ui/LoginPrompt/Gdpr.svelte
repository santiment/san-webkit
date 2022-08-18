<script>
  import { onDestroy } from 'svelte'
  import { debounce } from './../../utils/fn'
  import { mutateGdpr } from './../../api/gdpr'
  import { mutateChangeUsername } from './../../api/user'
  import FieldTooltip from './../../ui/FieldTooltip/svelte'
  import Checkbox from './../../ui/Checkbox.svelte'
  import InputWithIcon from './../../ui/InputWithIcon.svelte'
  import Section from './Section.svelte'
  export let onAccept
  export let currentUser
  const constraints = {
    required: true,
    minlength: 3,
  }
  const defaultUsername = currentUser && currentUser.username
  let isActive = false
  let error = ''
  let loading = false

  $: username = defaultUsername

  $: isDisabled = !isActive || !username || error

  const [checkValidity, clearTimer] = debounce(250, (input) => {
    const { value } = input

    if (value.length < 3) {
      error = 'Username should be at least 3 characters long'
    } else if (value[0] === '@') {
      error = '@ is not allowed for the first character'
    } else {
      error = ''
    }
  })

  function onBlur() {
    if (username) return
    error = ''
    username = defaultUsername
  }

  function onInput({ currentTarget }) {
    username = currentTarget.value
    checkValidity(currentTarget)
  }

  function onSubmit() {
    if (isDisabled) return
    loading = true
    const usernamePromise = defaultUsername ? Promise.resolve() : mutateChangeUsername(username)
    usernamePromise
      .catch(onUsernameChangeError)
      .then(() => mutateGdpr(true))
      .then(() => (currentUser.privacyPolicyAccepted = true))
      .then(onAccept)
      .catch(console.error)
  }

  function onUsernameChangeError() {
    error = `Username "${username}" is already taken`
    loading = false
    return Promise.reject()
  }

  onDestroy(clearTimer)
</script>

<Section title="Welcome to Insights">
  <div class="c-waterloo body-2">
    {#if !defaultUsername}
      <p>Please type your username to access all features</p>

      <FieldTooltip text={error} activeClass="error-2yHMrm">
        <InputWithIcon
          {constraints}
          value={username}
          placeholder="username"
          class="body-3"
          on:input={onInput}
          on:blur={onBlur}
        >
          <span slot="left">@</span>
        </InputWithIcon>
      </FieldTooltip>
    {/if}

    <p>Review and accept our Privacy Policy to continue using Sanbase</p>
  </div>

  <div class="btn row v-center body-2" on:click={() => (isActive = !isActive)}>
    <Checkbox class="mrg-m mrg--r" {isActive} />
    I accept
    <a href="https://santiment.net/terms" target="_blank" rel="noopener noreferrer">Terms</a> and
    <a
      href="https://app.santiment.net/privacy-policy"
      target="_blank"
      rel="noopener noreferrer"
      on:click={window.__onLinkClick}>Privacy Policy</a
    >
  </div>

  <button
    class="submit btn-1 btn--l mrg-xxl mrg--t"
    class:loading
    class:disabled={isDisabled}
    on:click={onSubmit}>Continue</button
  >
</Section>

<style>
  div {
    --left: 25px;
    text-align: left;
    max-width: 380px;
  }

  p {
    margin: 16px 0;
  }

  .submit {
    min-width: 188px;
  }

  span {
    position: absolute;
    left: 9px;
    color: var(--green);
  }

  a {
    color: var(--green);
    margin: 0 4px;
  }
  a:hover {
    color: var(--green-hover);
  }

  :global(.error-2yHMrm) {
    --border: var(--red);
  }
</style>
