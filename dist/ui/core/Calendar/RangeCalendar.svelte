<script lang="ts">
  import type { DateRange } from 'bits-ui'
  import type { DateValue } from '@internationalized/date'

  import { RangeCalendar } from 'bits-ui'
  import { Time, fromDate, toCalendarDateTime } from '@internationalized/date'

  import { cn } from '../../utils/index.js'
  import Button from '../Button/index.js'

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
    onChange?: (dates: [Date, Date]) => void
  } = $props()

  const value = $derived(getValue(date, timeZone))
  const presets = $derived(withPresets ? getPresets(timeZone) : [])

  const placeholder = createPlaceholder(() => value.end)

  const onValueChange = ({ start, end }: DateRange) => {
    if (!start || !end) return

    const endDateTime = toCalendarDateTime(end, new Time(23, 59, 59, 999))
    const startDateTime = toCalendarDateTime(start, new Time())

    onChange?.([startDateTime.toDate(timeZone), endDateTime.toDate(timeZone)])
  }

  function getValue([start, end]: [Date, Date], tz: string) {
    return { start: fromDate(start, tz), end: fromDate(end, tz) }
  }
</script>

<RangeCalendar.Root
  class={cn('h-full max-w-max rounded border bg-white', className)}
  let:months
  let:weekdays
  weekdayFormat="short"
  fixedWeeks
  {value}
  {onValueChange}
  bind:placeholder={placeholder.date}
  {minValue}
  {maxValue}
>
  <div class="flex h-full flex-row items-stretch">
    <div>
      <CalendarHeader bind:placeholder={placeholder.date} range {minValue} {maxValue} />

      <CalendarBody {months} {weekdays} range />
    </div>

    {#if withPresets}
      <aside class="flex min-w-36 flex-col items-stretch border-l p-2">
        {#each presets as { title, range }}
          <Button onclick={() => onValueChange(range)} class="px-[6px] py-2" variant="ghost">
            {title}
          </Button>
        {/each}
      </aside>
    {/if}
  </div>
</RangeCalendar.Root>
