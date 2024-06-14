<script lang="ts">
  import type { DateRange } from 'bits-ui'

  import { BROWSER } from 'esm-env'
  import { RangeCalendar } from 'bits-ui'
  import { Time, fromDate, getLocalTimeZone, toCalendarDateTime } from '@internationalized/date'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'

  let { class: className, date = $bindable() }: { date: [Date, Date]; class?: string } = $props()

  const timeZone = $derived(BROWSER ? getLocalTimeZone() : 'utc')
  const value = $derived(getValue(date, timeZone))

  const onValueChange = ({ start, end }: DateRange) => {
    if (!start || !end) return

    const endDateTime = toCalendarDateTime(end, new Time(23, 59, 59, 999))
    const startDateTime = toCalendarDateTime(start, new Time())

    date = [startDateTime.toDate(timeZone), endDateTime.toDate(timeZone)]
  }

  function getValue([start, end]: [Date, Date], tz: string) {
    return { start: fromDate(start, tz), end: fromDate(end, tz) }
  }
</script>

<RangeCalendar.Root
  class={cn('max-w-max rounded border bg-white', className)}
  let:months
  let:weekdays
  weekdayFormat="short"
  fixedWeeks
  {value}
  {onValueChange}
>
  <RangeCalendar.Header class="flex items-center justify-between">
    <RangeCalendar.PrevButton class="rounded-9px inline-flex size-8 items-center justify-center">
      <Svg id="arrow-left-big" />
    </RangeCalendar.PrevButton>
    <RangeCalendar.Heading class="text-[15px] font-medium" />
    <RangeCalendar.NextButton class="rounded-9px inline-flex size-8 items-center justify-center">
      <Svg id="arrow-right-big" />
    </RangeCalendar.NextButton>
  </RangeCalendar.Header>

  <div class="month flex flex-col space-y-4 px-3 pb-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
    {#each months as month}
      <RangeCalendar.Grid class="w-full border-collapse select-none space-y-1">
        <RangeCalendar.GridHead>
          <RangeCalendar.GridRow class="mb-1 flex w-full justify-between">
            {#each weekdays as day}
              <RangeCalendar.HeadCell
                class="w-8 rounded-md text-xs font-normal uppercase text-waterloo"
              >
                <div>{day.slice(0, 2)}</div>
              </RangeCalendar.HeadCell>
            {/each}
          </RangeCalendar.GridRow>
        </RangeCalendar.GridHead>
        <RangeCalendar.GridBody>
          {#each month.weeks as weekDates}
            <RangeCalendar.GridRow class="flex w-full">
              {#each weekDates as date}
                <RangeCalendar.Cell
                  {date}
                  class="relative m-0 size-8 w-8 p-0 text-center focus-within:z-20"
                >
                  <RangeCalendar.Day
                    {date}
                    month={month.value}
                    class={cn(
                      'relative inline-flex size-full items-center justify-center whitespace-nowrap rounded',
                      'hover:bg-athens hover:text-green',
                      'data-[unavailable]:text-mystic data-[unavailable]:line-through',
                      'data-[disabled]:pointer-events-none data-[disabled]:text-mystic',
                      'data-[outside-month]:pointer-events-none',
                      'data-[highlighted]:rounded-none data-[highlighted]:bg-green-light-1',
                      'data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none',
                    )}
                  >
                    {date.day}
                  </RangeCalendar.Day>
                </RangeCalendar.Cell>
              {/each}
            </RangeCalendar.GridRow>
          {/each}
        </RangeCalendar.GridBody>
      </RangeCalendar.Grid>
    {/each}
  </div>
</RangeCalendar.Root>

<style lang="postcss">
  .month {
    & :global([data-today]:not([data-highlighted]):not([data-selected]):not(:hover)) {
      @apply text-blue;
    }

    & :global([data-selected]) {
      @apply rounded bg-green-light-1 text-green;
    }

    & :global([data-selection-start]) {
      @apply rounded-e-none rounded-s;
    }

    & :global([data-selection-end]) {
      @apply rounded-e rounded-s-none;
    }
  }
</style>
