<script lang="ts">
  import { millify } from '@/utils/formatting'

  export let creation

  $: ({ changes } = creation)
  $: last = changes[changes.length - 1]?.marketcap
</script>

{#if last}
  <h2 class="h4 mrg-s mrg--b c-black">$ {millify(last)}</h2>
{/if}
