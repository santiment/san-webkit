<script lang="ts">
  import { Query } from '$lib/api/executor.js'
  import Input from '$ui/core/Input/index.js'
  import Checkbox from '$ui/core/Checkbox/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { trackGdprAccept } from '$lib/analytics/events/onboarding.js'
  import { useCustomerCtx } from '$lib/ctx/customer/index.svelte.js'
  import ValidationError from '$ui/core/ValidationError/index.js'

  import { mutateGdpr, mutateChangeUsername } from './api.js'
  import Card from '../LoginForm/Card.svelte'

  type TProps = {
    class?: string
    onAccept: (username: string) => void
  }

  const { class: className, onAccept }: TProps = $props()

  const { customer, currentUser } = useCustomerCtx()

  const defaultUsername = currentUser.$$?.username ?? ''

  let usernameError = $state('')
  let privacyError = $state('')
  let isPrivacyAccepted = $state(false)
  let isMarketingAccepted = $state(false)
  let loading = $state(false)
  let username = $state(defaultUsername)

  function validateUsername(value: string) {
    if (value.length < 4) return 'Username should be at least 4 characters long'
    if (value[0] === '@') return '@ is not allowed for the first character'

    return ''
  }

  function validatePrivacy(isAcceped: boolean) {
    if (isAcceped) return ''

    return 'Please agree with the Privacy Policy to sign up'
  }

  function validate() {
    usernameError = validateUsername(username)
    privacyError = validatePrivacy(isPrivacyAccepted)

    return !usernameError && !privacyError
  }

  function clearErrors() {
    usernameError = ''
    privacyError = ''
  }

  function onSubmit() {
    if (!validate()) return

    loading = true

    const changeUsernamePromise =
      !defaultUsername && username ? mutateChangeUsername(Query)(username) : Promise.resolve()

    changeUsernamePromise
      .then(() =>
        mutateGdpr(Query)({
          privacyPolicyAccepted: isPrivacyAccepted,
          marketingAccepted: isMarketingAccepted,
        })
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
    usernameError = 'Failed to accept the privacy policy.'
    loading = false
    return Promise.reject()
  }

  function handleUsernameChangeError() {
    usernameError = `Username "${username}" is already taken.`
    loading = false
    return Promise.reject()
  }
</script>

<Card class={cn('text-base', className)}>
  <h1 class="mb-5 text-3xl font-medium">Welcome to Sanbase</h1>

  {#if !defaultUsername}
    <label class="mb-6 flex flex-col gap-3 text-rhino">
      <span>First, set your username:</span>

      <section class="relative">
        <Input
          value={username}
          placeholder="username"
          class={cn('h-10 text-black', usernameError && 'border-red')}
          inputClass="pl-6"
          oninput={(e) => ((username = e.currentTarget.value.trim()), clearErrors())}
          onblur={clearErrors}
          minlength={4}
          required
        >
          {#snippet left()}
            <span class="absolute left-2 text-green">@</span>
          {/snippet}
        </Input>

        {#if usernameError}
          <ValidationError class="max-w-full" error={usernameError} />
        {/if}
      </section>
    </label>
  {/if}

  <section class="flex flex-col gap-2">
    <section class="flex gap-3">
      <Checkbox
        class="mt-1"
        isActive={isPrivacyAccepted}
        error={privacyError}
        onCheckedChange={() => (isPrivacyAccepted = !isPrivacyAccepted)}
      ></Checkbox>

      <span>
        I accept
        <Button variant="link" href="https://santiment.net/terms" target="_blank">Terms</Button>
        and
        <Button variant="link" href="https://app.santiment.net/privacy-policy" target="_blank">
          Privacy Policy
        </Button>
      </span>
    </section>

    <section class="flex gap-3">
      <Checkbox
        class="mt-1"
        isActive={isMarketingAccepted}
        onCheckedChange={() => (isMarketingAccepted = !isMarketingAccepted)}
      />
      <section class="flex flex-col gap-2">
        <span>I’d like to receive emails with tips and updates from time to time.</span>
        <span class="text-sm text-fiord">
          No spam, your email never shared with third parties. Opt out anytime in Account Settings.
        </span>
      </section>
    </section>
  </section>

  <Button
    {loading}
    variant="fill"
    size="lg"
    class="mt-8 flex w-1/2 justify-center"
    onclick={onSubmit}
  >
    Continue
  </Button>
</Card>
