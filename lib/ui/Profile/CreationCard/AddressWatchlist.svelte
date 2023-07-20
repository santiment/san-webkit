<script lang="ts">
  export let creation

  $: ({ blockchainAddressesCount } = creation.stats)
</script>

<h2 class="h4 mrg-s mrg--b c-black">
  {blockchainAddressesCount}
  <span class="caption c-waterloo">address{blockchainAddressesCount > 1 ? 'es' : ''}</span>
</h2>
