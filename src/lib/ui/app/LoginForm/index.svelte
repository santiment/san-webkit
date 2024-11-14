<script lang="ts">
  import Section from './Section.svelte'
  import Metamask from './Metamask.svelte'
  import Divider from './Divider.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'

  type Props = {
    title: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    isSignUp?: boolean
    from?: string
    onMetamaskClick?: () => Promise<void>
  }

  const {
    title,
    bottomLabel = 'New to Santiment?',
    bottomAction = 'Create an account',
    bottomHref: bottomPath = '/sign-up',
    isSignUp = false,
    from = '',
    onMetamaskClick,
  }: Props = $props()

  let verifiedEmail = $state<string>()

  const bottomHref = $derived(bottomPath + `?from=${encodeURIComponent(from)}`)
</script>

{#if verifiedEmail}
  <EmailConfirmation email={verifiedEmail} {isSignUp} clearEmail={() => (verifiedEmail = '')} />
{:else}
  <Section {title} class="body-2" titleClass="mb-6" {bottomLabel} {bottomAction} {bottomHref}>
    <div class="flex flex-col gap-2">
      {#if onMetamaskClick}
        <Metamask {isSignUp} onclick={onMetamaskClick} />
      {/if}

      <Google {isSignUp} {from} />
      <Twitter {isSignUp} {from} />
    </div>

    <Divider />

    <EmailForm {isSignUp} {from} onSuccess={(email) => (verifiedEmail = email)} />
  </Section>
{/if}
