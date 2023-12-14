<script>
  import Section from './Section.svelte'

  export let verifiedEmail
  export let isSignUp = false
</script>

<Section
  title="Email Confirmation"
  titleMargin="mrg-xl"
  bottomLabel="Back to"
  bottomAction="log in options"
  bottomHref={isSignUp ? '/sign-up' : '/login'}
  on:click={() => (verifiedEmail = '')}
>
  <p class="c-waterloo mrg-xxl mrg--b">
    We just sent an email to <span class="c-black">{verifiedEmail}</span>. Please check your inbox
    and click on the confirmation link.
  </p>
</Section>

<style>
  p {
    max-width: 320px;
  }
</style>
