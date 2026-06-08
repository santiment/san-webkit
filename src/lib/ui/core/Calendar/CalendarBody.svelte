<script lang="ts">
  import type { DateValue } from '@internationalized/date'
  import type { Month } from 'bits-ui'

  import { Calendar, RangeCalendar } from 'bits-ui'

  import { cn } from '$ui/utils/index.js'

  type Props = {
    range?: boolean
    months: Month<DateValue>[]
    weekdays: string[]
  }

  let { range = false, months, weekdays }: Props = $props()

  const Base = range ? RangeCalendar : Calendar
</script>

<div
  class="month flex space-y-0 space-x-4 px-3 pt-4 pb-3 sm:px-5 sm:pt-6 sm:pb-0 sm:text-base xs:flex-col xs:space-y-4"
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

<style lang="postcss">
  @reference '#app.css';

  .month {
    & :global([data-today]:not([data-highlighted]):not([data-selected]):not(:hover)) {
      @apply text-blue;
    }

    & :global([data-selected]) {
      @apply rounded bg-green-light-1 text-green;
    }

    & :global([data-selection-start]) {
      @apply rounded-s rounded-e-none;
    }

    & :global([data-selection-end]) {
      @apply rounded-s-none rounded-e;
    }
  }
</style>
