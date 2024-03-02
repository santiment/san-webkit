<script>
  import Section from './Section.svelte'
  import Metamask from './Metamask.svelte'
  import Divider from './Divider.svelte'
  import Google from './Google.svelte'
  import Twitter from './Twitter.svelte'
  import EmailForm from './EmailForm.svelte'
  import EmailConfirmation from './EmailConfirmation.svelte'
  // import WalletConnect from './WalletConnect/index.svelte'

  export let title
  export let onMetamaskClick
  export let bottomLabel = 'New to Santiment?'
  export let bottomAction = 'Create an account'
  export let bottomHref = '/sign-up'
  export let isSignUp = false
  export let from = ''
  // export let onWalletConnectLogin

  let verifiedEmail

  $: bottomHref = bottomHref + `?from=${encodeURIComponent(from)}`
</script>

{#if verifiedEmail}
  <EmailConfirmation bind:verifiedEmail {isSignUp} />
{:else}
  <Section {title} class="body-2" titleMargin="mrg-xl" {bottomLabel} {bottomAction} {bottomHref}>
    <Metamask {isSignUp} onClick={onMetamaskClick} />

    <Google {isSignUp} {from} />
    <Twitter {isSignUp} {from} />

    <Divider />

    <EmailForm bind:verifiedEmail {isSignUp} {from} />

    <!-- <WalletConnect onLogin={onWalletConnectLogin} /> -->
  </Section>
{/if}
