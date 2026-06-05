<script>
  import AssetLogo from '$ui/app/AssetLogo/AssetLogo.svelte'

  const SLUGS = [
    'Missing',
    'tether',
    'bnb-tether',
    'arb-tether',
    'a-tether',
    'p-tether',
    'o-tether',
  ]
</script>

<div class=" p-6">
  {#each SLUGS as slug, i}
    <div>
      {slug}:

      <AssetLogo {slug}></AssetLogo>
    </div>
  {/each}
</div>
