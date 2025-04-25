<script lang="ts">
  import { debounceTime, pipe, tap } from 'rxjs'

  import { Query } from '$lib/api/executor.js'
  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import Tooltip from '$ui/core/Tooltip/index.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import { trackGdprAccept } from '$lib/analytics/events/onboarding.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import { useObserveFnCall } from '$lib/utils/observable.svelte.js'

  import Section from '../LoginForm/Section.svelte'
  import { mutateGdpr, mutateChangeUsername } from './api.js'

  type TProps = {
    onAccept: (username: string) => void
    title?: string
  }

  const { onAccept, title = 'Welcome to Sanbase' }: TProps = $props()

  const { customer, currentUser } = useCustomerCtx()

  const defaultUsername = currentUser.$$?.username ?? ''

  let error = $state('')
  let isActive = $state(false)
  let loading = $state(false)
  let username = $state(defaultUsername)

  const isDisabled = $derived(!isActive || (!defaultUsername && !username) || !!error)

  const checkValidity = useObserveFnCall<{ value: string }>(() =>
    pipe(
      debounceTime(250),
      tap((input) => {
        const { value } = input

        if (value.length < 4) {
          error = 'Username should be at least 4 characters long'
        } else if (value[0] === '@') {
          error = '@ is not allowed for the first character'
        } else {
          error = ''
        }
      }),
    ),
  )

  function onBlur() {
    if (username) return
    error = ''
    username = defaultUsername
  }

  function onInput({ currentTarget }: Event & { currentTarget: HTMLInputElement }) {
    username = currentTarget.value
    checkValidity(currentTarget)
  }

  function onSubmit() {
    if (isDisabled) return

    loading = true

    const changeUsernamePromise =
      !defaultUsername && username ? mutateChangeUsername(Query)(username) : Promise.resolve()

    changeUsernamePromise
      .then(() =>
        mutateGdpr(Query)(true)
          .then(() => customer.reload())
          .then(() => {
            window.onGdprAccept?.()
            trackGdprAccept(true)
          })
          .catch(handleGdprPolicyError),
      )
      .then(() => username && onAccept(username))
      .catch(handleUsernameChangeError)
      .finally(() => {
        loading = false
      })
  }

  function handleGdprPolicyError() {
    error = 'Failed to accept the privacy policy.'
    loading = false
    return Promise.reject()
  }

  function handleUsernameChangeError() {
    error = `Username "${username}" is already taken.`
    loading = false
    return Promise.reject()
  }
</script>

<Section {title}>
  <div class="max-w-[380px] text-start text-waterloo">
    {#if !defaultUsername}
      <p class="my-4 text-base">Please type your username to access all features</p>

      <div class="relative">
        <Tooltip isOpened={!!error} class="absolute mt-1">
          <Input
            value={username}
            placeholder="username"
            class={cn('text-black', error && 'border-red')}
            inputClass="pl-6"
            oninput={onInput}
            onblur={onBlur}
            minlength={4}
            required
          >
            {#snippet left()}
              <span class="absolute left-2 text-green">@</span>
            {/snippet}
          </Input>

          {#snippet content()}
            <span class="flex items-center gap-1 fill-red px-2 py-1.5 text-black">
              <Svg id="error" class="mr-1" />
              {error}
            </span>
          {/snippet}
        </Tooltip>
      </div>
    {/if}

    <p class="my-4 text-base">Review and accept our Privacy Policy to continue using Sanbase</p>
  </div>

  <div class="flex max-w-[380px] items-center text-base">
    <Checkbox class="mr-3" {isActive} onCheckedChange={() => (isActive = !isActive)}></Checkbox>
    I accept
    <a href="https://santiment.net/terms" target="_blank" class="mx-1 link-pointer">Terms</a>
    and
    <a href="https://app.santiment.net/privacy-policy" target="_blank" class="mx-1 link-pointer"
      >Privacy Policy</a
    >
  </div>

  <Button
    {loading}
    variant="fill"
    class="mx-auto mt-8 flex min-w-[188px] justify-center py-2.5 md:min-w-full"
    disabled={isDisabled}
    onclick={onSubmit}
    style="--loading-color: var(--white)"
  >
    Continue
  </Button>
</Section>
