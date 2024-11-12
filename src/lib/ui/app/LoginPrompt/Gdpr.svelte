<script lang="ts">
  // Svelte imports
  import { onDestroy } from 'svelte'

  import { debounce } from '$lib/utils/fn.js'
  import { Query } from '$lib/api/executor.js'
  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  // import { trackGdprAccept } from '@/analytics/events/onboarding'

  import { mutateGdpr, mutateChangeUsername } from './api.js'
  import Section from './Section.svelte'

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

  $: console.log(error)

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

      <div class="relative">
        <Tooltip isOpened={!!error} class="absolute mt-1">
          {#snippet children()}
            <Input
              value={username}
              placeholder="username"
              class={cn('text-black [&>input]:pl-6', error && 'border-red')}
              oninput={onInput}
              onblur={onBlur}
              {...constraints}
            >
              {#snippet left()}
                <span class="absolute left-2 text-green">@</span>
              {/snippet}
            </Input>
          {/snippet}

          {#snippet content()}
            <span class="flex items-center gap-1 fill-red px-2 py-1.5">
              <Svg id="error" class="mr-1" />
              {error}
            </span>
          {/snippet}
        </Tooltip>
      </div>
    {/if}

    <p class="my-4 text-base">Review and accept our Privacy Policy to continue using Sanbase</p>
  </div>

  <div class="flex items-center text-base">
    <Checkbox class="mr-3" {isActive} onCheckedChange={() => (isActive = !isActive)}></Checkbox>
    I accept
    <a
      href="https://santiment.net/terms"
      target="_blank"
      class="mx-1 text-green hover:text-green-hover">Terms</a
    >
    and
    <a
      href="https://app.santiment.net/privacy-policy"
      target="_blank"
      class="mx-1 text-green hover:text-green-hover">Privacy Policy</a
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
