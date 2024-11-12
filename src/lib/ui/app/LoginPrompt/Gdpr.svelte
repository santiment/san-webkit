<script lang="ts">
  import { onDestroy } from 'svelte'
  import { debounce } from '$lib/utils/fn.js'
  import { mutateGdpr } from './api.js'
  import { mutateChangeUsername } from './api.js'
  // import FieldTooltip from '@/ui/FieldTooltip/svelte'
  // import InputWithIcon from '@/ui/InputWithIcon.svelte'
  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  // import { trackGdprAccept } from '@/analytics/events/onboarding'
  import Section from './Section.svelte'
  import { Query } from '$lib/api/executor.js'

  export let onAccept: any
  export let currentUser: null | { username: null | string; privacyPolicyAccepted: boolean }
  export let title = 'Welcome to Sanbase'

  const constraints = { required: true, minlength: 3 }
  const defaultUsername = currentUser && currentUser.username

  let isActive = false
  let error = ''
  let loading = false

  $: username = defaultUsername
  $: isDisabled = !isActive || !username || error

  const [checkValidity, clearTimer] = debounce(250, (input: any) => {
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

  function onInput({ currentTarget }: any) {
    username = currentTarget.value
    checkValidity(currentTarget)
  }

  function onSubmit() {
    if (isDisabled) return

    loading = true
    const usernamePromise = defaultUsername
      ? Promise.resolve()
      : mutateChangeUsername(Query)({ username })

    usernamePromise
      .catch(onUsernameChangeError)
      .then(() => {
        // TODO: Not sure about that
        return mutateGdpr(Query)({ privacyPolicyAccepted: true })
      })
      .then(() => {
        // TODO: Not sure about that
        if (currentUser) {
          currentUser.privacyPolicyAccepted = true
        }

        // if (window.onGdprAccept) window.onGdprAccept()
        // trackGdprAccept(true)

        return username
      })
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

<Section {title}>
  <div class="c-waterloo body-2">
    {#if !defaultUsername}
      <p>Please type your username to access all features</p>

      <!-- <FieldTooltip text={error} activeClass="$style.error"> -->
      <Input
        value={username}
        placeholder="username"
        class="body-3"
        oninput={onInput}
        onblur={onBlur}
        {...constraints}
      >
        {#snippet left()}
          <span class="absolute left-2 text-green">@</span>
        {/snippet}
      </Input>

      <!-- <InputWithIcon -->
      <!--   {constraints} -->
      <!--   value={username} -->
      <!--   placeholder="username" -->
      <!--   class="body-3" -->
      <!--   on:input={onInput} -->
      <!--   on:blur={onBlur} -->
      <!-- > -->
      <!--   <span slot="left">@</span> -->
      <!-- </InputWithIcon> -->
      <!-- </FieldTooltip> -->
    {/if}

    <p>Review and accept our Privacy Policy to continue using Sanbase</p>
  </div>

  <!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="btn v-center body-2 row">
    <Checkbox class="mrg-m mrg--r" {isActive} onCheckedChange={() => (isActive = !isActive)}
    ></Checkbox>
    I accept
    <a href="https://santiment.net/terms" target="_blank" class="link-pointer">Terms</a>
    and
    <a href="https://app.santiment.net/privacy-policy" target="_blank" class="link-pointer"
      >Privacy Policy</a
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

  /* .error { */
  /*   --border: var(--red); */
  /* } */
</style>
