<script lang="ts">
  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  import { Calendar } from 'bits-ui'
  import {
    fromDate,
    getLocalTimeZone,
    isSameDay,
    isSameMonth,
    isToday,
  } from '@internationalized/date'

  type TProps = { as: any }
  let {
    as,
    buttonClass,
    rootClass,

    popoverIsOpened = $bindable(false),
    withTrigger = true,

    ...rest
  }: TProps = $props()

  const localTimeZone = getLocalTimeZone()

  const range = [fromDate(new Date('2026-06-15'), 'utc'), fromDate(new Date(), 'utc')]

  const targetCursor = 0
</script>

<Popover
  noStyles
  class={cn('z-10 shadow-dropdown dark:shadow-none', rootClass)}
  rootProps={rest.popoverRootProps}
  bind:isOpened={popoverIsOpened}
  contentProps={rest.popoverContentProps}
  children={withTrigger ? triggerSnippet : undefined}
>
  {#snippet content()}
    <Calendar.Root
      type="single"
      class={cn('max-w-max rounded border bg-white sm:border-0 dark:bg-athens', '')}
      weekdayFormat="short"
      fixedWeeks
      value={fromDate(new Date(), 'utc')}
      onValueChange={console.log}
    >
      {#snippet children({ months, weekdays })}
        {console.log(months)}
        {#each months as month}
          {@const state = { selected: false, cursor: 0 }}
          {@const getSelectionClass = (date: any) => {
            const target = range[state.cursor]
            if (!target) return ''

            if (isSameDay(date, target)) {
              const className =
                state.cursor === targetCursor
                  ? 'bg-green text-white'
                  : `bg-green-light-1 calendar-restrict-${targetCursor ? 'before' : 'after'}`
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
                    isToday(date, localTimeZone) && 'text-green',
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
  {/snippet}
</Popover>

{#snippet triggerSnippet({ props }: { props: Record<string, any> })}
  <Button
    {...props}
    {as}
    variant="border"
    icon="calendar"
    class={cn('whitespace-nowrap', buttonClass)}
  >
    123
  </Button>
{/snippet}

<style>
  :global(.calendar-restrict-after ~ span),
  :global(span:has(~ .calendar-restrict-before)) {
    cursor: not-allowed;
    color: var(--mystic);
    background: none !important;
  }
</style>
