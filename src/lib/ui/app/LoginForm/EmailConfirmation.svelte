<script lang="ts">
  import Section from './Section.svelte'

  type Props = {
    email: string
    clearEmail: () => void
    isSignUp?: boolean
  }

  const { email, isSignUp = false, clearEmail }: Props = $props()
</script>

<Section
  title="Email Confirmation"
  titleClass="mb-6"
  bottomLabel="Back to"
  bottomAction="log in options"
  bottomHref={isSignUp ? '/sign-up' : '/login'}
  onBottomClick={clearEmail}
>
  <p class="mb-8 max-w-80 text-waterloo">
    We just sent an email to <span class="text-black">{email}</span>. Please check your inbox and
    click on the confirmation link.
  </p>
</Section>
