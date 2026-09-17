<script lang="ts">
  import Button from '$ui/core/Button/Button.svelte'

  import Card from './Card.svelte'

  type TProps = {
    email: string
    clearEmail: () => void
    isSignUp?: boolean
  }

  const { email, isSignUp = false, clearEmail }: TProps = $props()
</script>

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
</Card>
