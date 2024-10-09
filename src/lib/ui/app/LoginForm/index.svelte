<script lang="ts">
  import Section from './Section.svelte'
  // import Metamask from './Metamask.svelte'
  import Divider from './Divider.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
  // import EmailForm from './EmailForm.svelte'
  // import EmailConfirmation from './EmailConfirmation.svelte'

  type Props = {
    title: string
    bottomLabel?: string
    bottomAction?: string
    bottomHref?: string
    isSignUp?: boolean
    from?: string
  }

  const {
    title,
    bottomLabel = 'New to Santiment?',
    bottomAction = 'Create an account',
    bottomHref: bottomPath = '/sign-up',
    isSignUp = false,
    from = '',
  }: Props = $props()

  // export let onMetamaskClick
  // export let onWalletConnectLogin

  // let verifiedEmail

  const bottomHref = $derived(bottomPath + `?from=${encodeURIComponent(from)}`)
</script>

<!-- {#if verifiedEmail}
  <EmailConfirmation bind:verifiedEmail {isSignUp} />
{:else} -->
<Section {title} class="body-2" titleClass="mb-6" {bottomLabel} {bottomAction} {bottomHref}>
  <!-- <Metamask {isSignUp} onClick={onMetamaskClick} /> -->

  <div class="flex flex-col gap-2">
    <Google {isSignUp} {from} />
    <Twitter {isSignUp} {from} />
  </div>

  <Divider />

  <!-- <EmailForm bind:verifiedEmail {isSignUp} {from} /> -->
</Section>
<!-- {/if} -->
