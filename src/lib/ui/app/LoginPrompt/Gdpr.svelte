<script lang="ts">
  import { onDestroy } from 'svelte'

  import { debounce } from '$lib/utils/fn.js'
  import { Query } from '$lib/api/executor.js'
  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import { trackGdprAccept } from '$lib/analytics/events/onboarding.js'

  import { mutateGdpr, mutateChangeUsername } from './api.js'
  import Section from './Section.svelte'

  /*
    2. Разобраться с использованием нового контекста
    2.1 Узнать как выглядит новый контекст
    2.2 Изучить код на предмет перезаписи контекста
    2.3 Подключить новый контекст
  */

  const {
    onAccept,
    currentUser,
    title = 'Welcome to Sanbase',
  }: {
    onAccept: (username: string | null) => void
    currentUser: { username: string | null; privacyPolicyAccepted: boolean }
    title?: string
  } = $props()

  let isActive = $state(false)
  let error = $state('')
  let loading = $state(false)

  // INFO: Not sure
  let username = $state(currentUser?.username)
  const isDisabled = $derived(!isActive || !username || !!error)

  // INFO: Rewrite to ZOD?
  const [checkValidity, clearTimer] = debounce(250, (input: any) => {
    const { value } = input

    if (value.length < 4) {
      error = 'Username should be at least 4 characters long'
    } else if (value[0] === '@') {
      error = '@ is not allowed for the first character'
    } else {
      error = ''
    }
  })

  function onBlur() {
    if (username) return
    error = ''
    username = currentUser?.username
  }

  function onInput({ currentTarget }: any) {
    username = currentTarget.value
    checkValidity(currentTarget)
  }

  function onSubmit() {
    if (isDisabled) return

    loading = true
    // INFO: Not sure
    const usernamePromise = currentUser?.username
      ? Promise.resolve()
      : mutateChangeUsername(Query)({ username })

    usernamePromise
      .catch(onUsernameChangeError)
      .then(() => {
        return mutateGdpr(Query)({ privacyPolicyAccepted: true })
      })
      .then(() => {
        if (currentUser) {
          // TODO: Not sure that it will work
          currentUser.privacyPolicyAccepted = true
        }

        if (window.onGdprAccept) window.onGdprAccept()
        trackGdprAccept(true)

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
    {#if !currentUser?.username}
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
              minlength={4}
              required
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
