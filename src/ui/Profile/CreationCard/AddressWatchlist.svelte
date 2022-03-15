<script>
  import Change, { percentChange, formatPercentChange } from '@/ui/Change.svelte'
  import Area from '@/ui/MiniChart/Area.svelte'
  import { millify } from '@/utils/formatting'

  export let creation

  $: ({ title, changes } = creation)
  $: first = changes[0].marketcap
  $: last = changes[changes.length - 1].marketcap
  $: change = percentChange(first, last)
</script>

<h2 class="h4 mrg-s mrg--b c-black">$ {millify(last)}</h2>
