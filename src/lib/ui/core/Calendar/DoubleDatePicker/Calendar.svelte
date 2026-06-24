<script lang="ts">
  import { Calendar, type Month } from 'bits-ui'
  import {
    getLocalTimeZone,
    isSameDay,
    isSameMonth,
    isToday,
    type DateValue,
  } from '@internationalized/date'
  import { isBefore } from '@melt-ui/svelte/internal/helpers/date'

  import { cn } from '$ui/utils/index.js'

  type TProps = { range: readonly [DateValue, DateValue]; targetCursor: 0 | 1 }
  let { range, targetCursor }: TProps = $props()

  const localTimeZone = getLocalTimeZone()

  function createCalendarState(month: Month<DateValue>) {
    if (targetCursor === 1 && isBefore(range[0], month.dates[0])) {
      return { selected: true, cursor: 1 }
    }

    return { selected: false, cursor: 0 }
  }
</script>

<Calendar.Root
  type="single"
  class="max-w-max p-2"
  weekdayFormat="short"
  fixedWeeks
  value={range[targetCursor]}
  onValueChange={console.log}
>
  {#snippet children({ months, weekdays })}
    {#each months as month}
      {@const state = createCalendarState(month)}
      {@const getSelectionClass = (date: any) => {
        const target = range[state.cursor]
        if (!target) return ''

        if (isSameDay(date, target)) {
          const className =
            state.cursor === targetCursor
              ? 'bg-green !text-white'
              : `bg-green-light-1 outline-green outline outline-1 -outline-offset-1 calendar-restrict-${targetCursor ? 'before' : 'after'}`
          state.selected = true
          state.cursor++

          return className
        }

        return state.selected ? 'bg-green-light-1 rounded-none' : ''
      }}

      <div
        class="mb-1 grid grid-cols-7 text-center text-xs font-normal uppercase text-waterloo sm:text-sm"
      >
        {#each weekdays as day}
          <div class="w-8 rounded-md">
            {day.slice(0, 2)}
          </div>
        {/each}
      </div>

      <div class="grid select-none grid-cols-7 text-center">
        {#each month.weeks as weekDates}
          {#each weekDates as date}
            <span
              class={cn(
                'w-8 cursor-pointer rounded py-1.5 hover:bg-athens',
                getSelectionClass(date),
                isToday(date, localTimeZone) && 'calendar-restrict-after text-green underline',
                !isSameMonth(date, month.value) && 'text-casper',
              )}
            >
              {date.day}
            </span>
          {/each}
        {/each}
      </div>
    {/each}
  {/snippet}
</Calendar.Root>

<style>
  :global(.calendar-restrict-after ~ span),
  :global(span:has(~ .calendar-restrict-before)) {
    cursor: not-allowed;
    color: var(--mystic);
    background: none !important;
  }
</style>
