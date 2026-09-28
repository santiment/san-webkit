<script lang="ts">
  import Section from './Section.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  let verifiedEmail = $state('')
</script>

{#if verifiedEmail}
  <EmailConfirmation email={verifiedEmail} clearEmail={() => (verifiedEmail = '')} />
{:else}
  <Section
    title="Welcome back"
    bottomLabel="Or choose"
    bottomAction="another log in option"
    bottomHref="/login"
  >
    <p class="mx-auto mb-8 max-w-80 text-base text-waterloo">
      Log in to your Sanbase account to access additional features of our platform
    </p>

    <EmailForm onSuccess={(email) => (verifiedEmail = email)} />
  </Section>
{/if}
