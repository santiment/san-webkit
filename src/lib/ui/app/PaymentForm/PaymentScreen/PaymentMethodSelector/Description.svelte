<script lang="ts">
  import type { Snippet } from 'svelte'

  import { onSupportClick } from '$lib/utils/support.js'

  let {
    type,
    name,
    img,
    children,
    noteSnippet,
  }: { type?: string; name: string; img: string; noteSnippet?: Snippet; children: Snippet } =
    $props()
</script>

<div class="t-body-2-regular gap-4 text-fiord column">
  {@render noteSnippet?.()}

  <h2 class="t-body-2-semibold flex gap-3 text-black">
    <img src={img} alt="Ethereum" class="h-6 max-h-6" />

    {name}
  </h2>

  {@render children()}

  <a
    href="mailto:support@santiment.net"
    class="t-body-3-regular mt-4 w-fit rounded-lg border border-green px-5 py-3"
    data-type="{type}_pay_crypto_help"
    data-source="payment_dialog"
    onclick={onSupportClick}
  >
    <span class="mr-2">📩</span> Need help with crypto payments?
    <span class="text-green">Contact us!</span>
  </a>
</div>
