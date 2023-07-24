<script>import { onDestroy, setContext } from 'svelte';
import { Device } from './../lib/responsive';
import Dialogs from './../lib/ui/Dialog/Dialogs.svelte';
import { UI$$ } from './../lib/stores/ui';
import { CurrentUser$$ } from './../lib/stores/user';
import { Customer$$ } from './../lib/stores/customer';
import { Device$$, getDeviceInfo } from './../lib/stores/responsive';
import Dialog from './Dialog.svelte';
import { paymentCard$ } from './../lib/stores/paymentCard';
export let currentUser;
export let customer;
export let server;
CurrentUser$$(currentUser);
Customer$$(customer);
UI$$();
const { device$ } = Device$$(getDeviceInfo(Device.Desktop));
paymentCard$.clear();
paymentCard$.setDefault();
document.body.classList.add(Device.Desktop);
setContext('Dialog', Dialog);
onDestroy(() => {
    server === null || server === void 0 ? void 0 : server.shutdown();
});
</script>

<svelte:window on:resize={device$.onResize} />

<slot />

<Dialogs />

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
:global(#storybook-root) {
  min-height: 100vh;
}
:global(.sbdocs) :global(h1) {
  margin-bottom: 32px;
}
:global(.sbdocs) :global(*) + :global(h2) {
  margin-top: 32px;
}
:global(.prismjs) {
  font-family: monospace;
}
:global(.monospace) {
  font: var(--caption);
  font-family: monospace !important;
}</style>
