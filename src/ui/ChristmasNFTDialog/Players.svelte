<script lang="ts">
  import Table from '@/ui/Table/Paged.svelte'

  const querySignals = () =>
    window
      .fetch(
        'https://sanr-l2-api.production.internal.santiment.net/api/v1/leaderboards/forecasts?filter=%22sanbaseInsight%22:%7B%22$ne%22:null%7D&take=10',
      )
      .then((res) => res.json())

  querySignals().then(console.log)

  let page = 1
  const items = []
  let pageOffset: number = 0

  const columns = []

  function onPageChange(page: number) {
    console.log(page)
  }
</script>

<h2 class="h4 txt-m mrg-xl mrg--b">Players</h2>

<p class="mrg-l mrg--b">Here are the players who have entered the battle.</p>

<Table class="$style.table" {items} {columns} {onPageChange} bind:pageOffset />

<style>
</style>
