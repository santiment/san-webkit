<script lang="ts">
  import { Calendar, type Month } from 'bits-ui'
  import {
    isSameDay,
    isSameMonth,
    isToday,
    now,
    parseDate,
    type DateValue,
  } from '@internationalized/date'
  import { isBefore } from '@melt-ui/svelte/internal/helpers/date'

  import { cn } from '$ui/utils/index.js'

  import CalendarHeader from '../CalendarHeader.svelte'

  type TProps = {
    range: readonly [DateValue, DateValue]
    targetCursor: 0 | 1
    timeZone: string
    onSelect: (date: Date) => void
  }
  let { range, targetCursor, timeZone, onSelect }: TProps = $props()

  const minMax = $derived(
    targetCursor === 0 ? { maxValue: range[1] } : { minValue: range[0], maxValue: now('utc') },
  )

  let placeholder = $state.raw(range[targetCursor])

  function createCalendarState(month: Month<DateValue>) {
    if (targetCursor === 1) {
      if (isSameDay(range[0], range[1])) {
        return { selected: false, cursor: 1, sameDayRange: true }
      }

      if (isBefore(range[1], month.dates[0])) {
        return { selected: false, cursor: 2 }
      }
    }

    if (isBefore(range[0], month.dates[0])) {
      return { selected: true, cursor: targetCursor }
    }

    return { selected: false, cursor: 0 }
  }

  function onDateClick(e: MouseEvent) {
    const el = e.target as null | HTMLElement

    if (!el?.dataset.dateValue) return
    if (window.getComputedStyle(el).cursor === 'not-allowed') return

    try {
      const dateValue = parseDate(el.dataset.dateValue)
      onSelect(dateValue.toDate(timeZone))
    } catch (e) {
      console.warn(e)
    }
  }
</script>

<Calendar.Root
  {...minMax}
  type="single"
  class="max-w-max"
  weekdayFormat="short"
  fixedWeeks
  value={range[targetCursor]}
  bind:placeholder
>
  {#snippet children({ months, weekdays })}
    <CalendarHeader {...minMax} bind:placeholder></CalendarHeader>

    {#each months as month}
      {@const state = range[targetCursor] && createCalendarState(month)}
      {@const getSelectionClass = (date: any) => {
        const target = range[state.cursor]
        if (!target) return null

        if (isSameDay(date, target)) {
          let className =
            state.cursor === targetCursor
              ? 'bg-green hover:bg-green-hover !text-white'
              : `bg-green-light-1 outline-green outline outline-1 -outline-offset-1 calendar-restrict-${targetCursor ? 'before' : 'after'}`
          state.selected = true
          state.cursor++

          if (state.sameDayRange)
            className += targetCursor ? ' calendar-restrict-before' : 'calendar-restrict-after'

          return className
        }

        return state.selected ? 'bg-green-light-1 rounded-none' : ''
      }}

      <section class="mx-auto w-56 select-none py-3 text-center">
        <div class="mb-1 grid grid-cols-7 text-xs font-normal uppercase text-waterloo sm:text-sm">
          {#each weekdays as day}
            <div class="w-8 rounded-md">
              {day.slice(0, 2)}
            </div>
          {/each}
        </div>

        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <div class="grid grid-cols-7" onclick={onDateClick}>
          {#each month.weeks as weekDates}
            {#each weekDates as date}
              <span
                data-date-value={date.toString()}
                class={cn(
                  'w-8 cursor-pointer rounded py-1.5 hover:bg-athens',
                  getSelectionClass(date),
                  isToday(date, timeZone) && 'calendar-restrict-after text-green underline',
                  !isSameMonth(date, month.value) && 'text-casper',
                )}
              >
                {date.day}
              </span>
            {/each}
          {/each}
        </div>
      </section>
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
