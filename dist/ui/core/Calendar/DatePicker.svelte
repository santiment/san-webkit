<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'
  import Popover from '../Popover/index.js'
  import Button from '../Button/index.js'
  import Svg from '../Svg/index.js'
  import Calendar from './Calendar.svelte'
  import RangeCalendar from './RangeCalendar.svelte'

  let {
    date = $bindable(),
    withPresets,
    minDate = new Date(2009, 0, 1),
    maxDate = new Date(),
  }: { date: [Date, Date] | Date; withPresets?: boolean; minDate?: Date; maxDate?: Date } = $props()

  const label = $derived(
    Array.isArray(date)
      ? `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`
      : date.toLocaleDateString(),
  )
  const timeZone = $derived(BROWSER ? getLocalTimeZone() : 'utc')
  const minValue = $derived(fromDate(minDate, timeZone))
  const maxValue = $derived(fromDate(maxDate, timeZone))
</script>

<Popover noStyles>
  {#snippet children({ ref })}
    <Button {ref} variant="border" class="whitespace-nowrap">
      <Svg id="calendar" w="16" />
      {label}
    </Button>
  {/snippet}

  {#snippet content()}
    {#if Array.isArray(date)}
      <RangeCalendar bind:date {withPresets} {timeZone} {minValue} {maxValue} />
    {:else}
      <Calendar bind:date {timeZone} {minValue} {maxValue} />
    {/if}
  {/snippet}
</Popover>
