<script lang="ts">
  import type { DateValue } from '@internationalized/date'

  import { BROWSER } from 'esm-env'
  import { Calendar } from 'bits-ui'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'
  import { cn } from '$ui/utils/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import CalendarHeading from './CalendarHeading.svelte'
  import { createPlaceholder } from './utils.svelte.js'

  let { class: className, date = $bindable() }: { date: Date; class?: string } = $props()

  const timeZone = $derived(BROWSER ? getLocalTimeZone() : 'utc')
  const value = $derived(fromDate(date, timeZone))

  const placeholder = createPlaceholder(() => value)

  const onValueChange = (update: DateValue | undefined) => {
    if (!update) return

    date = update.toDate(timeZone)
  }
</script>

<Calendar.Root
  class={cn('max-w-max rounded border bg-white', className)}
  let:months
  let:weekdays
  weekdayFormat="short"
  fixedWeeks
  multiple={false}
  {value}
  {onValueChange}
  bind:placeholder={placeholder.date}
>
  <Calendar.Header class="flex items-center justify-between border-b p-2">
    <Calendar.PrevButton class="rounded-9px inline-flex size-8 items-center justify-center">
      <Svg id="arrow-left-big" />
    </Calendar.PrevButton>
    <CalendarHeading bind:placeholder={placeholder.date} {timeZone} />
    <Calendar.NextButton class="rounded-9px inline-flex size-8 items-center justify-center">
      <Svg id="arrow-right-big" />
    </Calendar.NextButton>
  </Calendar.Header>

  <div class="month flex flex-col space-y-4 px-3 pb-3 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
    {#each months as month}
      <Calendar.Grid class="w-full border-collapse select-none space-y-1">
        <Calendar.GridHead>
          <Calendar.GridRow class="mb-1 flex w-full justify-between">
            {#each weekdays as day}
              <Calendar.HeadCell class="w-8 rounded-md text-xs font-normal uppercase text-waterloo">
                {day.slice(0, 2)}
              </Calendar.HeadCell>
            {/each}
          </Calendar.GridRow>
        </Calendar.GridHead>
        <Calendar.GridBody>
          {#each month.weeks as weekDates}
            <Calendar.GridRow class="flex w-full">
              {#each weekDates as date}
                <Calendar.Cell
                  {date}
                  class="relative m-0 size-8 w-8 p-0 text-center focus-within:z-20"
                >
                  <Calendar.Day
                    {date}
                    month={month.value}
                    class={cn(
                      'relative inline-flex size-full items-center justify-center whitespace-nowrap rounded',
                      'hover:bg-athens hover:text-green',
                      'data-[unavailable]:text-mystic data-[unavailable]:line-through',
                      'data-[disabled]:pointer-events-none data-[disabled]:text-mystic',
                      'data-[outside-month]:pointer-events-none',
                      'data-[highlighted]:rounded-none data-[highlighted]:bg-green-light-1',
                    )}
                  >
                    {date.day}
                  </Calendar.Day>
                </Calendar.Cell>
              {/each}
            </Calendar.GridRow>
          {/each}
        </Calendar.GridBody>
      </Calendar.Grid>
    {/each}
  </div>
</Calendar.Root>

<style lang="postcss">
  .month {
    & :global([data-today]:not([data-highlighted]):not([data-selected]):not(:hover)) {
      @apply text-blue;
    }

    & :global([data-selected]) {
      @apply rounded bg-green-light-1 text-green;
    }
  }
</style>
