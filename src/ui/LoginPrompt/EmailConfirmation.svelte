<script>
  import Section from './Section.svelte'

  export let email
</script>

<Section
  title="Email Confirmation"
  titleMargin="mrg-xl"
  bottomLabel="Back to"
  bottomAction="log in options"
  bottomHref="/login">
  <p class="c-waterloo mrg-xxl mrg--b">
    We just sent an email to <span class="c-black">{email}</span>. Please check your inbox and click
    on the confirmation link.
  </p>
</Section>

<style>
  p {
    max-width: 320px;
  }
</style>
