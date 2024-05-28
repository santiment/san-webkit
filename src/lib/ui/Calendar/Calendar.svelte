<script lang="ts">
  import { RangeCalendar } from 'bits-ui'
  import { cn } from '../utils'
  import Svg from '../Svg'

  let { class: className }: { class?: string } = $props()
</script>

<RangeCalendar.Root
  class={cn('mt-6 max-w-max rounded border bg-white', className)}
  let:months
  let:weekdays
  weekdayFormat="short"
  fixedWeeks={true}
>
  <RangeCalendar.Header class="flex items-center justify-between">
    <RangeCalendar.PrevButton
      class="rounded-9px bg-background-alt hover:bg-muted active:scale-98 inline-flex size-8 items-center justify-center"
    >
      <Svg id="arrow-left-big" />
    </RangeCalendar.PrevButton>
    <RangeCalendar.Heading class="text-[15px] font-medium" />
    <RangeCalendar.NextButton
      class="rounded-9px bg-background-alt hover:bg-muted active:scale-98 inline-flex size-8 items-center justify-center"
    >
      <Svg id="arrow-right-big" />
    </RangeCalendar.NextButton>
  </RangeCalendar.Header>

  <div class="flex flex-col space-y-4 px-3 pb-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
    {#each months as month}
      <RangeCalendar.Grid class="w-full border-collapse select-none space-y-1">
        <RangeCalendar.GridHead>
          <RangeCalendar.GridRow class="mb-1 flex w-full justify-between">
            {#each weekdays as day}
              <RangeCalendar.HeadCell
                class="text-muted-foreground w-8 rounded-md text-xs !font-normal uppercase text-waterloo"
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
                  class="relative m-0 size-8 w-8 !p-0 text-center text-sm focus-within:z-20"
                >
                  <RangeCalendar.Day
                    {date}
                    month={month.value}
                    class={cn(
                      'size-full rounded hover:bg-athens hover:text-green',
                      'data-[today]:[&:not([data-highlighted])]:[&:not([data-selected])]:[&:not(:hover)]:text-blue',
                      'data-[selected]:bg-green-light-1 data-[selected]:text-green',
                      'data-[unavailable]:text-mystic',
                      'data-[disabled]:text-mystic',
                      'data-[highlighted]:rounded-none data-[highlighted]:bg-green-light-1',
                      'data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:border-foreground group relative inline-flex items-center justify-center overflow-visible whitespace-nowrap border border-transparent bg-transparent p-0 text-sm font-normal data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none  data-[selected]:font-medium data-[selection-end]:font-medium data-[selection-start]:font-medium  data-[unavailable]:line-through data-[selection-start]:focus-visible:ring-2 data-[selection-start]:focus-visible:!ring-offset-2 data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:!ring-0 data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:!ring-offset-0',
                      'data-[selection-start]:rounded-e-none data-[selection-start]:rounded-s data-[selection-start]:bg-green-light-2',
                      'data-[selection-end]:rounded-e data-[selection-end]:rounded-s-none data-[selection-end]:bg-green-light-2',
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
