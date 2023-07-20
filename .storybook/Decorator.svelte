<script>import { Device } from './../lib/responsive';
import Dialogs from './../lib/ui/Dialog/Dialogs.svelte';
import { UI$$ } from './../lib/stores/ui';
import { CurrentUser$$ } from './../lib/stores/user';
import { Customer$$ } from './../lib/stores/customer';
import { Device$$, getDeviceInfo } from './../lib/stores/responsive';
export let currentUser;
export let customer;
CurrentUser$$(currentUser);
Customer$$(customer);
UI$$();
const { device$ } = Device$$(getDeviceInfo(Device.Desktop));
document.body.classList.add(Device.Desktop);
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
