<script lang="ts">import { useDeviceCtx } from "../../../ctx/device/index.svelte.js";
let {
  desktop = false,
  tablet = false,
  phone = false,
  children
} = $props();
const targets = { desktop, tablet, phone, "phone-xs": phone };
const { device } = useDeviceCtx();
</script>

{#if targets[device.$.type]}
  {@render children()}
{/if}
