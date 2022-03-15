<script lang="ts">
  import Change, { percentChange, formatPercentChange } from '@/ui/Change.svelte'
  import Area from '@/ui/MiniChart/Area.svelte'
  import { millify } from '@/utils/formatting'

  export let creation

  $: ({ title, changes } = creation)
  $: first = changes[0].marketcap
  $: last = changes[changes.length - 1]?.marketcap
  $: change = percentChange(first, last)
</script>

<h2 class="h4 mrg-s mrg--b c-black">$ {millify(last)}</h2>

<Area
  id={title}
  data={changes}
  width={150}
  height={32}
  valueKey="marketcap"
  style="--color:var(--{change < 0 ? 'red' : 'lima'})" />

<div class="row v-center caption c-waterloo mrg-l mrg--t">
  <Change change={formatPercentChange(change)} class="mrg-xs mrg--r" />
  in last 7d
</div>
