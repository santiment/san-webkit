<script lang="ts">
  import type { DateRange } from 'bits-ui'
  import type { DateValue } from '@internationalized/date'

  import { RangeCalendar } from 'bits-ui'
  import { Time, fromDate, toCalendarDateTime } from '@internationalized/date'

  import { cn } from '$ui/utils/index.js'
  import Button from '$ui/core/Button/index.js'
  import { useUiCtx } from '$lib/ctx/ui/index.svelte.js'

  import { createPlaceholder } from './utils.svelte.js'
  import { getPresets } from './presets.js'
  import CalendarBody from './CalendarBody.svelte'
  import CalendarHeader from './CalendarHeader.svelte'

  const {
    class: className,
    date,
    withPresets = false,
    minValue,
    maxValue,
    timeZone,
    onChange,
  }: {
    class?: string
    date: [Date, Date]
    withPresets?: boolean
    minValue?: DateValue
    maxValue?: DateValue
    timeZone: string
    onChange?: (dates: [Date, Date], timeRange?: string) => void
  } = $props()

  const { ui } = useUiCtx()

  const value = $derived(getValue(date, timeZone))
  const presets = $derived(withPresets ? getPresets(timeZone) : [])

  const placeholder = createPlaceholder(() => value.end)

  function onValueChange({ start, end }: DateRange, timeRange?: string) {
    if (!start || !end) return

    const endDateTime = toCalendarDateTime(end, new Time(23, 59, 59, 999))
    const startDateTime = toCalendarDateTime(start, new Time())

    onChange?.([startDateTime.toDate(timeZone), endDateTime.toDate(timeZone)], timeRange)
  }

  function getValue([start, end]: [Date, Date], tz: string) {
    return { start: fromDate(start, tz), end: fromDate(end, tz) }
  }
</script>

<RangeCalendar.Root
  --active-ghost-button-bg={ui.$$.isNightMode ? 'var(--porcelain)' : undefined}
  class={cn('h-full max-w-max rounded border bg-white dark:bg-athens', className)}
  weekdayFormat="short"
  fixedWeeks
  {value}
  {onValueChange}
  bind:placeholder={placeholder.date}
  {minValue}
  {maxValue}
>
  {#snippet children({ months, weekdays })}
    <div class="flex h-full flex-row items-stretch">
      <div>
        <CalendarHeader bind:placeholder={placeholder.date} range {minValue} {maxValue} />

        <CalendarBody {months} {weekdays} range />
      </div>

      {#if withPresets}
        <aside class="flex min-w-36 flex-col items-stretch border-l p-2">
          {#each presets as { id, title, range }}
            <Button onclick={() => onValueChange(range, id)} class="px-[6px] py-2" variant="ghost">
              {title}
            </Button>
          {/each}
        </aside>
      {/if}
    </div>
  {/snippet}
</RangeCalendar.Root>
