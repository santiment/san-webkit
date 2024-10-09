<script lang="ts">
  import { onSupportClick } from '$lib/utils/support.js'
  import type { Snippet } from 'svelte'

  let {
    type,
    name,
    img,
    children,
    noteSnippet,
  }: { type?: string; name: string; img: string; noteSnippet?: Snippet; children: Snippet } =
    $props()
</script>

<div class="gap-4 text-base text-fiord column">
  {@render noteSnippet?.()}

  <h2 class="flex gap-3 font-semibold text-black">
    <img src={img} alt="Ethereum" class="h-6 max-h-6" />

    {name}
  </h2>

  {@render children()}

  <a
    href="mailto:support@santiment.net"
    class="mt-4 w-fit rounded-lg border border-green px-5 py-3 text-sm"
    data-type="{type}_pay_crypto_help"
    data-source="payment_dialog"
    onclick={onSupportClick}
  >
    <span class="mr-2">📩</span> Need help with crypto payments?
    <span class="text-green">Contact us!</span>
  </a>
</div>
