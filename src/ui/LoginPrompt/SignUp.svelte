<script>
  import Section from './Section.svelte'
  import Divider from './Divider.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  export let verifiedEmail
</script>

{#if verifiedEmail}
  <EmailConfirmation email={verifiedEmail} />
{:else}
  <Section
    title="Sign up now"
    titleMargin="mrg-xxl"
    bottomLabel="Have an account?"
    bottomAction="Log in"
    bottomHref="/login">
    <Google />
    <Twitter />

    <Divider />

    <EmailForm bind:verifiedEmail />
    <div class="caption c-waterloo mrg-s mrg--t">No credit card required</div>
  </Section>
{/if}
