<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'
  import Popover from '../Popover/index.js'
  import Button from '../Button/index.js'
  import Svg from '../Svg/index.js'
  import { cn } from '../../utils/index.js'
  import Calendar from './Calendar.svelte'
  import RangeCalendar from './RangeCalendar.svelte'

  type TProps = {
    as?: ComponentProps<typeof Button>['as']
    class?: string
    date: [Date, Date] | Date
    withPresets?: boolean
    minDate?: Date
    maxDate?: Date
    onChange?: (date: Date) => void
    timeZone?: string
    children?: Snippet
  }
  let {
    as,
    class: className,
    date = $bindable(),
    withPresets,
    maxDate,
    children: _children,
    minDate = new Date(2009, 0, 1),
    timeZone = BROWSER ? getLocalTimeZone() : 'utc',
    onChange,
  }: TProps = $props()

  const minValue = $derived(BROWSER ? fromDate(minDate, timeZone) : undefined)
  const maxValue = $derived(BROWSER && maxDate ? fromDate(maxDate, timeZone) : undefined)
</script>

<Popover noStyles class="z-10">
  {#snippet children({ ref })}
    <Button {as} {ref} variant="border" class={cn('whitespace-nowrap', className)}>
      <Svg id="calendar" w="16" />
      {#if _children}
        {@render _children()}
      {:else}
        {Array.isArray(date)
          ? `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`
          : date.toLocaleDateString()}
      {/if}
    </Button>
  {/snippet}

  {#snippet content()}
    {#if Array.isArray(date)}
      <RangeCalendar bind:date {withPresets} {timeZone} {minValue} {maxValue} />
    {:else}
      <Calendar bind:date {timeZone} {minValue} {maxValue} {onChange} />
    {/if}
  {/snippet}
</Popover>
