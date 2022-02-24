<script>
  import Section from './Section.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  let verifiedEmail
</script>

{#if verifiedEmail}
  <EmailConfirmation email={verifiedEmail} />
{:else}
  <Section
    title="Welcome back"
    bottomLabel="Or choose"
    bottomAction="another log in option"
    bottomHref="/login">
    <p class="body-2 mrg-xxl mrg--b c-waterloo">
      Log in to your Sanbase account to access additional features of our platform
    </p>

    <EmailForm bind:verifiedEmail />
  </Section>
{/if}

<style>
  p {
    max-width: 320px;
  }
</style>
