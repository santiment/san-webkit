<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'
  import { BROWSER } from 'esm-env'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'
  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'
  import Svg from '$ui/core/Svg/index.js'
  import { cn } from '$ui/utils/index.js'
  import Calendar from './Calendar.svelte'
  import RangeCalendar from './RangeCalendar.svelte'

  type TCommonProps = {
    as?: ComponentProps<typeof Button>['as']
    class?: string
    minDate?: Date
    maxDate?: Date
    timeZone?: string
    children?: Snippet
  }

  type TSingleProps = {
    date: Date
    onChange?: (date: Date) => void
    withPresets?: never
  }

  type TRangeProps = {
    date: [Date, Date]
    onChange?: (date: [Date, Date]) => void
    withPresets?: boolean
  }

  type TProps = TCommonProps & (TSingleProps | TRangeProps)

  const {
    as,
    class: className,
    maxDate,
    children: _children,
    minDate = new Date(2009, 0, 1),
    timeZone = BROWSER ? getLocalTimeZone() : 'utc',
    ...rest
  }: TProps = $props()

  const minValue = $derived(BROWSER ? fromDate(minDate, timeZone) : undefined)
  const maxValue = $derived(BROWSER && maxDate ? fromDate(maxDate, timeZone) : undefined)

  function isRangeProps(props: TSingleProps | TRangeProps): props is TRangeProps {
    return Array.isArray(props.date)
  }
</script>

<Popover noStyles class="z-10">
  {#snippet children({ ref })}
    <Button {as} {ref} variant="border" class={cn('whitespace-nowrap', className)}>
      <Svg id="calendar" w="16" />
      {#if _children}
        {@render _children()}
      {:else}
        {isRangeProps(rest)
          ? `${rest.date[0].toLocaleDateString()} - ${rest.date[1].toLocaleDateString()}`
          : rest.date.toLocaleDateString()}
      {/if}
    </Button>
  {/snippet}

  {#snippet content()}
    {#if isRangeProps(rest)}
      {@const { date, withPresets, onChange } = rest}

      <RangeCalendar {date} {withPresets} {timeZone} {minValue} {maxValue} {onChange} />
    {:else}
      {@const { date, onChange } = rest}

      <Calendar {date} {timeZone} {minValue} {maxValue} {onChange} />
    {/if}
  {/snippet}
</Popover>
