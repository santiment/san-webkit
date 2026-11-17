<script lang="ts">
  import type { DateValue } from '@internationalized/date'
  import type { Month } from 'bits-ui'

  import { Calendar, RangeCalendar } from 'bits-ui'

  import { cn } from '../../utils/index.js'

  type Props = {
    range?: boolean
    months: Month<DateValue>[]
    weekdays: string[]
  }

  let { range = false, months, weekdays }: Props = $props()

  const Base = range ? RangeCalendar : Calendar
</script>

<div
  class="month flex space-y-0 space-x-4 px-3 pt-4 pb-3 sm:flex-col sm:space-y-4 sm:px-5 sm:pt-6 sm:pb-0 sm:text-base"
>
  {#each months as month}
    <Base.Grid class="w-full border-collapse space-y-1 select-none">
      <Base.GridHead>
        <Base.GridRow class="mb-1 flex justify-between">
          {#each weekdays as day}
            <Base.HeadCell
              class="w-8 rounded-md text-xs font-normal text-waterloo uppercase sm:text-sm"
            >
              {day.slice(0, 2)}
            </Base.HeadCell>
          {/each}
        </Base.GridRow>
      </Base.GridHead>
      <Base.GridBody>
        {#each month.weeks as weekDates}
          <Base.GridRow class="flex w-full sm:justify-between">
            {#each weekDates as date}
              <Base.Cell
                {date}
                month={month.value}
                class="relative m-0 size-8 p-0 text-center focus-within:z-20 sm:size-10"
              >
                <Base.Day
                  class={cn(
                    'relative inline-flex size-full items-center justify-center rounded-sm whitespace-nowrap',
                    'hover:bg-athens hover:text-green dark:hover:bg-porcelain',
                    'data-unavailable:text-mystic data-unavailable:line-through',
                    'data-disabled:pointer-events-none data-disabled:text-mystic',
                    'data-outside-month:pointer-events-none',
                    'data-highlighted:rounded-none data-highlighted:bg-green-light-1',
                    range &&
                      'data-selected:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none',
                  )}
                />
              </Base.Cell>
            {/each}
          </Base.GridRow>
        {/each}
      </Base.GridBody>
    </Base.Grid>
  {/each}
</div>

<style>/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
.month :global([data-today]:not([data-highlighted]):not([data-selected]):not(:hover)){color:rgb(var(--c-blue) / 1)}.month :global([data-selected]){border-radius:var(--radius-sm,.25rem);background-color:rgb(var(--c-green-light-1) / 1);color:rgb(var(--c-green) / 1)}.month :global([data-selection-start]){border-start-start-radius:.25rem;border-start-end-radius:0;border-end-end-radius:0;border-end-start-radius:.25rem}.month :global([data-selection-end]){border-start-start-radius:0;border-start-end-radius:.25rem;border-end-end-radius:.25rem;border-end-start-radius:0}
</style>
