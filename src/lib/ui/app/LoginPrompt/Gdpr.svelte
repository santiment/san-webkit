<script lang="ts">
  import { onDestroy } from 'svelte'
  import { debounce } from '$lib/utils/fn.js'
  import { mutateGdpr } from './api.js'
  import { mutateChangeUsername } from './api.js'
  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  // import { trackGdprAccept } from '@/analytics/events/onboarding'
  import Section from './Section.svelte'
  import { Query } from '$lib/api/executor.js'
  import Button from '$ui/core/Button/index.js'

  export let onAccept: any
  export let currentUser: null | { username: null | string; privacyPolicyAccepted: boolean }
  export let title = 'Welcome to Sanbase'

  const constraints = { required: true, minlength: 3 }
  const defaultUsername = currentUser && currentUser.username

  let isActive = false
  let error = ''
  let loading = false

  $: username = defaultUsername
  $: isDisabled = !isActive || !username || !!error

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
  <div class="text-start text-waterloo">
    {#if !defaultUsername}
      <p class="my-4 text-base">Please type your username to access all features</p>

      <Input
        value={username}
        placeholder="username"
        class="text-black [&>input]:pl-6"
        oninput={onInput}
        onblur={onBlur}
        {...constraints}
      >
        {#snippet left()}
          <span class="absolute left-2 text-green">@</span>
        {/snippet}
      </Input>
    {/if}

    <p class="my-4 text-base">Review and accept our Privacy Policy to continue using Sanbase</p>
  </div>

  <!-- eslint-disable-next-line svelte/no-unused-svelte-ignore -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="flex items-center text-base">
    <Checkbox class="mr-3" {isActive} onCheckedChange={() => (isActive = !isActive)}></Checkbox>
    I accept
    <a href="https://santiment.net/terms" target="_blank" class="mx-1 text-green">Terms</a>
    and
    <a href="https://app.santiment.net/privacy-policy" target="_blank" class="mx-1 text-green"
      >Privacy Policy</a
    >
  </div>

  <Button
    {loading}
    variant="fill"
    class="mt-8 flex justify-center py-2.5"
    disabled={isDisabled}
    onclick={onSubmit}
    style="--loading-color: var(--white)"
  >
    Continue
  </Button>
</Section>
