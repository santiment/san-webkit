<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'
  import { useCountdown } from '$lib/ctx/time/countdown.svelte.js'

  import Card from './Card.svelte'
  import Turnstile from './Turnstile.svelte'
  import { useEmailLogin } from './email.svelte.js'

  type TProps = {
    email: string
    clearEmail: () => void
    isSignUp?: boolean
    from?: string
  }

  const { email, isSignUp = false, from, clearEmail }: TProps = $props()

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

<Card class="items-center text-base">
  <h1 class="mb-6 text-3xl font-medium">Email Confirmation</h1>

  <p class="mb-5 text-center text-fiord">
    We just sent an email to <span class="text-black">{email}</span>. Please check your inbox and
    click on the confirmation link.
  </p>

  <span class="text-fiord">
    Back to <Button variant="link" href={isSignUp ? '/sign-up' : '/login'} onclick={clearEmail}>
      log in options
    </Button>
  </span>

  <section class="mt-20 flex h-10 items-center">
    {#if secondsLeft.$}
      <div class="text-waterloo">Send link again in {resendLabel}</div>
    {:else}
      <Button variant="border" size="lg" class="px-7" onclick={resendEmail} loading={loading.$}>
        Resend the link
      </Button>
    {/if}
  </section>
</Card>
