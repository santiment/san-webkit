<script lang="ts">
  import Share from '$ui/core/Share/Share.svelte'

  const getLink = () => Promise.resolve('https://app.santiment.net/s/YBVJyqVw')
</script>

<div class="flex h-screen items-center justify-center">
  <Share {getLink} feature="chart_layout" source="charts" />
</div>
