<script>import Svg from './../../ui/Svg/svelte';
import Section from './Section.svelte';
import Metamask from './Metamask.svelte';
import Divider from './Divider.svelte';
import Option from './Option.svelte';
import Google from './Google.svelte';
import Twitter from './Twitter.svelte';
import WalletConnect from './WalletConnect/index.svelte';
export let title = 'Welcome to Insights';
export let onMetamaskClick;
export let onWalletConnectLogin;</script>

<Section
  {title}
  titleMargin="mrg-xxl"
  bottomLabel="New to Santiment?"
  bottomAction="Create an account"
  bottomHref="/sign-up"
>
  <Metamask onClick={onMetamaskClick} />

  <Divider />

  <Option href="/login/email" prefetch on:click={window.__onLinkClick}>
    <Svg id="email" w="16" h="12" class="mrg-s mrg--r icon-1IJmpv" />
    Log in with Email
  </Option>

  <WalletConnect onLogin={onWalletConnectLogin} />
  <Google />
  <Twitter />
</Section>

<style>
  :global(.icon-1IJmpv) {
    fill: var(--casper);
  }
</style>
