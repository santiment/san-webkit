<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import { cn } from '$ui/utils/index.js'
  import { useCountdown } from '$lib/ctx/time/countdown.svelte.js'

  import Card from './Card.svelte'
  import Turnstile from './Turnstile.svelte'
  import { useEmailLogin } from './email.svelte.js'

  type TProps = {
    class?: string
    email: string
    clearEmail: () => void
    isSignUp?: boolean
    from?: string
  }

  const { class: className, email, isSignUp = false, from, clearEmail }: TProps = $props()

  const RESEND_TIMEOUT = 2 * 60

  const { secondsLeft, reset: resetCoundown } = useCountdown({ durationSec: RESEND_TIMEOUT })
  const { loading, loginEmail } = useEmailLogin({
    errorMsg: 'Failed to resend email. Try again later.',
  })

  let turnstileRef: Turnstile

  const resendLabel = $derived(
    `${Math.floor(secondsLeft.$ / 60)}:${(secondsLeft.$ % 60).toString().padStart(2, '0')}`,
  )

  function resendEmail() {
    loginEmail({ email, from, turnstileRef, isSignUp }).then(
      (success) => success && resetCoundown({ durationSec: RESEND_TIMEOUT }),
    )
  }
</script>

<Turnstile bind:this={turnstileRef} />

<Card class={cn('items-center text-base sm:text-lg', className)}>
  <h1 class="mb-6 text-3xl font-medium sm:mb-8 sm:text-2xl">Email Confirmation</h1>

  <p class="mb-5 text-center text-fiord sm:text-start">
    We just sent an email to <span class="font-medium text-rhino">{email}</span>. Please check your
    inbox and click on the confirmation link.
  </p>

  <span class="text-fiord">
    Back to <Button variant="link" href={isSignUp ? '/sign-up' : '/login'} onclick={clearEmail}>
      {isSignUp ? 'Sign Up' : 'Log In'} options
    </Button>
  </span>

  <section
    class="mt-20 flex min-h-10 shrink-0 items-center sm:mt-auto sm:w-full sm:justify-center sm:pt-8"
  >
    {#if secondsLeft.$}
      <div class="text-waterloo">Send link again in {resendLabel}</div>
    {:else}
      <Button
        variant="border"
        size="lg"
        class="justify-center px-7 sm:w-full"
        onclick={resendEmail}
        loading={loading.$}
      >
        Resend the link
      </Button>
    {/if}
  </section>
</Card>
