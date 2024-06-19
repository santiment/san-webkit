<script lang="ts">import { RangeCalendar } from "bits-ui";
import Svg from "../Svg/index.js";
import { cn } from "../../utils/index.js";
import { calendarDateFromDate } from "./utils.js";
let { class: className, date = $bindable() } = $props();
const value = $derived(getValue(date));
const onValueChange = ({ start, end }) => {
  if (!start || !end) return;
  date = [start.toDate("utc"), end.toDate("utc")];
};
function getValue([start, end]) {
  return { start: calendarDateFromDate(start), end: calendarDateFromDate(end) };
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
