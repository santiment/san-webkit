<script lang="ts">
  import type { DateValue } from '@internationalized/date'
  import type { Month } from 'bits-ui'

  import { cn } from '../../utils/index.js'
  import { Calendar, RangeCalendar } from 'bits-ui'

  type Props = {
    range?: boolean
    months: Month<DateValue>[]
    weekdays: string[]
  }

  let { range = false, months, weekdays }: Props = $props()

  const Base = range ? RangeCalendar : Calendar
</script>

<div class="month flex space-x-4 space-y-0 px-3 pb-3 pt-4 xs:flex-col xs:space-y-4">
  {#each months as month}
    <Base.Grid class="w-full border-collapse select-none space-y-1">
      <Base.GridHead>
        <Base.GridRow class="mb-1 flex w-full justify-between">
          {#each weekdays as day}
            <Base.HeadCell class="w-8 rounded-md text-xs font-normal uppercase text-waterloo">
              {day.slice(0, 2)}
            </Base.HeadCell>
          {/each}
        </Base.GridRow>
      </Base.GridHead>
      <Base.GridBody>
        {#each month.weeks as weekDates}
          <Base.GridRow class="flex w-full">
            {#each weekDates as date}
              <Base.Cell {date} class="relative m-0 size-8 w-8 p-0 text-center focus-within:z-20">
                <Base.Day
                  {date}
                  month={month.value}
                  class={cn(
                    'relative inline-flex size-full items-center justify-center whitespace-nowrap rounded',
                    'hover:bg-athens hover:text-green',
                    'data-[unavailable]:text-mystic data-[unavailable]:line-through',
                    'data-[disabled]:pointer-events-none data-[disabled]:text-mystic',
                    'data-[outside-month]:pointer-events-none',
                    'data-[highlighted]:rounded-none data-[highlighted]:bg-green-light-1',
                    range &&
                      'data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none',
                  )}
                >
                  {date.day}
                </Base.Day>
              </Base.Cell>
            {/each}
          </Base.GridRow>
        {/each}
      </Base.GridBody>
    </Base.Grid>
  {/each}
</div>

<style>
  .month {
    & :global([data-today]:not([data-highlighted]):not([data-selected]):not(:hover)) {
        --tw-text-opacity: 1;
        color: rgb(var(--c-blue) / var(--tw-text-opacity))
    }

    & :global([data-selected]) {
        border-radius: 0.25rem
    }

    & :global([data-selected]) {
        --tw-bg-opacity: 1;
        background-color: rgb(var(--c-green-light-1) / var(--tw-bg-opacity))
    }

    & :global([data-selected]) {
        --tw-text-opacity: 1;
        color: rgb(var(--c-green) / var(--tw-text-opacity))
    }

    & :global([data-selection-start]) {
        border-start-end-radius: 0px;
        border-end-end-radius: 0px
    }

    & :global([data-selection-start]) {
        border-start-start-radius: 0.25rem;
        border-end-start-radius: 0.25rem
    }

    & :global([data-selection-end]) {
        border-start-end-radius: 0.25rem;
        border-end-end-radius: 0.25rem
    }

    & :global([data-selection-end]) {
        border-start-start-radius: 0px;
        border-end-start-radius: 0px
    }
  }
</style>
