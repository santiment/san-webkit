<script lang="ts">
  import { BROWSER } from 'esm-env'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import Calendar from './Calendar.svelte'
  import RangeCalendar from './RangeCalendar.svelte'
  import { showPickerDialog$ } from './PickerDialog.svelte'

  const { device } = useDeviceCtx()
  const showPickerDialog = showPickerDialog$()

  let {
    date = $bindable(),
    withPresets,
    minDate = new Date(2009, 0, 1),
    maxDate = new Date(),
  }: { date: [Date, Date] | Date; withPresets?: boolean; minDate?: Date; maxDate?: Date } = $props()

  const isPhone = $derived(device.$.isPhone)
  const label = $derived(
    Array.isArray(date)
      ? `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`
      : date.toLocaleDateString(),
  )
  const timeZone = $derived(BROWSER ? getLocalTimeZone() : 'utc')
  const minValue = $derived(fromDate(minDate, timeZone))
  const maxValue = $derived(fromDate(maxDate, timeZone))

  const isRange = (date: [Date, Date] | Date): date is [Date, Date] => Array.isArray(date)
</script>

{#if isPhone && !isRange(date)}
  {@const d = date}
  <Button
    onclick={() =>
      showPickerDialog({
        date: d,
        timeZone,
        minValue,
        maxValue,
      })}
    variant="border"
    class="whitespace-nowrap"
  >
    <Svg id="calendar" w="16" />
    {label}
  </Button>
{:else}
  <Popover noStyles>
    {#snippet children({ ref })}
      <Button {ref} variant="border" class="whitespace-nowrap">
        <Svg id="calendar" w="16" />
        {label}
      </Button>
    {/snippet}

    {#snippet content()}
      {#if isRange(date)}
        <RangeCalendar bind:date {withPresets} {timeZone} {minValue} {maxValue} />
      {:else}
        <Calendar bind:date {timeZone} {minValue} {maxValue} />
      {/if}
    {/snippet}
  </Popover>
{/if}
