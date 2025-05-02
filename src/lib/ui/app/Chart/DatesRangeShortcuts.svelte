<script lang="ts" module>
  import { CRYPTO_ERA_START_DATE, setDayStart } from '$lib/utils/dates/index.js'

  const CRYPTO_ERA_START_ISO = CRYPTO_ERA_START_DATE.toISOString()
  const YTD_ISO = getYearToDateIso()

  const SHORTCUTS = [
    ['1D', '1d'],
    ['7D', '7d'],
    ['1M', '30d'],
    ['3M', '90d'],
    ['6M', '180d'],
    ['YTD', YTD_ISO],
    ['1Y', '1y'],
    ['5Y', '5y'],
    ['ALL', CRYPTO_ERA_START_ISO],
  ]

  function getYearToDateIso() {
    const date = setDayStart(new Date(), { utc: true })
    date.setUTCMonth(0)
    date.setUTCDate(1)
    return date.toISOString()
  }

  function checkIsFixedIsoRange(dateRange: string) {
    return dateRange === CRYPTO_ERA_START_ISO || dateRange === YTD_ISO
  }
</script>

<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  import { useChartGlobalParametersCtx } from './ctx/global-parameters.svelte.js'

  const { globalParameters } = useChartGlobalParametersCtx.get()

  const activeDateRange = $derived.by(() => {
    if (globalParameters.$$.to !== 'utc_now') {
      return
    }

    const from = globalParameters.$$.from

    if (checkIsFixedIsoRange(from)) {
      return from
    }

    return from.split('-')[1]
  })

  function onDateRangeShortcutClick(dateRange: string) {
    globalParameters.$$.to = 'utc_now'
    globalParameters.$$.from = checkIsFixedIsoRange(dateRange) ? dateRange : 'utc_now-' + dateRange
  }
</script>

{#each SHORTCUTS as [label, value]}
  <Button
    onclick={() => onDateRangeShortcutClick(value)}
    class={cn(activeDateRange === value && 'bg-athens text-black')}
  >
    {label}
  </Button>
{/each}
