<script lang="ts">
  import AuthIllustration from './AuthIllustration.svelte'
  import Section from './Section.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  const { confirmationClass }: { confirmationClass?: string } = $props()

  let verifiedEmail = $state('')
</script>

{#if verifiedEmail}
  <EmailConfirmation
    class={confirmationClass}
    email={verifiedEmail}
    clearEmail={() => (verifiedEmail = '')}
  />
{:else}
  <div class="flex w-full items-center justify-center gap-[clamp(24px,calc(8vw-56px),88px)]">
    <AuthIllustration />

    <div class="max-w-[406px] flex-shrink-0 md:min-w-full md:max-w-full">
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
    </div>
  </div>
{/if}
