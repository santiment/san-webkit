<script lang="ts">
  import { Calendar, RangeCalendar } from 'bits-ui'
  import { cn } from '../utils'
  import Svg from '../Svg'

  let { class: className, range = false }: { class?: string; range?: boolean } = $props()

  const BaseCalendar = $derived(range ? RangeCalendar : Calendar)
</script>

<BaseCalendar.Root
  class={cn('max-w-max rounded border bg-white', className)}
  let:months
  let:weekdays
  weekdayFormat="short"
  fixedWeeks
>
  <BaseCalendar.Header class="flex items-center justify-between">
    <BaseCalendar.PrevButton class="rounded-9px inline-flex size-8 items-center justify-center">
      <Svg id="arrow-left-big" />
    </BaseCalendar.PrevButton>
    <BaseCalendar.Heading class="text-[15px] font-medium" />
    <BaseCalendar.NextButton class="rounded-9px inline-flex size-8 items-center justify-center">
      <Svg id="arrow-right-big" />
    </BaseCalendar.NextButton>
  </BaseCalendar.Header>

  <div class="month flex flex-col space-y-4 px-3 pb-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
    {#each months as month}
      <BaseCalendar.Grid class="w-full border-collapse select-none space-y-1">
        <BaseCalendar.GridHead>
          <BaseCalendar.GridRow class="mb-1 flex w-full justify-between">
            {#each weekdays as day}
              <BaseCalendar.HeadCell
                class="w-8 rounded-md text-xs font-normal uppercase text-waterloo"
              >
                <div>{day.slice(0, 2)}</div>
              </BaseCalendar.HeadCell>
            {/each}
          </BaseCalendar.GridRow>
        </BaseCalendar.GridHead>
        <BaseCalendar.GridBody>
          {#each month.weeks as weekDates}
            <BaseCalendar.GridRow class="flex w-full">
              {#each weekDates as date}
                <BaseCalendar.Cell
                  {date}
                  class="relative m-0 size-8 w-8 p-0 text-center focus-within:z-20"
                >
                  <BaseCalendar.Day
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
                  </BaseCalendar.Day>
                </BaseCalendar.Cell>
              {/each}
            </BaseCalendar.GridRow>
          {/each}
        </BaseCalendar.GridBody>
      </BaseCalendar.Grid>
    {/each}
  </div>
</BaseCalendar.Root>

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
