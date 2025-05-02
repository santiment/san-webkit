<script lang="ts">
  import type { ComponentProps, Snippet } from 'svelte'

  import { BROWSER } from 'esm-env'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'

  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  import Calendar from './Calendar.svelte'
  import RangeCalendar from './RangeCalendar.svelte'
  import { showPickerDialog$ } from './PickerDialog.svelte'

  type TCommonProps = {
    as?: ComponentProps<typeof Button>['as']
    class?: string
    minDate?: Date
    maxDate?: Date
    timeZone?: string
    children?: Snippet
    popoverRootProps?: ComponentProps<typeof Popover>['rootProps']
    popoverContentProps?: ComponentProps<typeof Popover>['contentProps']
    popoverIsOpened?: boolean
  }

  type TSingleProps = {
    date: Date
    onChange?: (date: Date) => void
    withPresets?: never
  }

  type TRangeProps = {
    date: [Date, Date]
    onChange?: (date: [Date, Date], timeRange?: string) => void
    withPresets?: boolean
  }

  type TProps = TCommonProps & (TSingleProps | TRangeProps)

  let {
    as,
    class: className,
    maxDate,
    children: _children,
    minDate = new Date(2009, 0, 1),
    timeZone = BROWSER ? getLocalTimeZone() : 'utc',
    popoverIsOpened = $bindable(false),
    ...rest
  }: TProps = $props()

  const { device } = useDeviceCtx()
  const showPickerDialog = showPickerDialog$()

  const isPhone = $derived(device.$.isPhone)
  const minValue = $derived(BROWSER ? fromDate(minDate, timeZone) : undefined)
  const maxValue = $derived(BROWSER && maxDate ? fromDate(maxDate, timeZone) : undefined)

  function isRangeProps(props: TSingleProps | TRangeProps): props is TRangeProps {
    return Array.isArray(props.date)
  }
</script>

{#if isPhone && !isRangeProps(rest)}
  <Button
    onclick={() =>
      showPickerDialog({
        date: rest.date,
        timeZone,
        minValue,
        maxValue,
        onChange: rest.onChange,
      })}
    variant="border"
    icon="calendar"
    class="whitespace-nowrap"
  >
    {@render label()}
  </Button>
{:else}
  <Popover
    noStyles
    class="z-10"
    rootProps={rest.popoverRootProps}
    bind:isOpened={popoverIsOpened}
    contentProps={rest.popoverContentProps}
  >
    {#snippet children({ props })}
      <Button
        {...props}
        {as}
        variant="border"
        icon="calendar"
        class={cn('whitespace-nowrap', className)}
      >
        {@render label()}
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
{/if}

{#snippet label()}
  {#if _children}
    {@render _children()}
  {:else}
    {isRangeProps(rest)
      ? `${rest.date[0].toLocaleDateString()} - ${rest.date[1].toLocaleDateString()}`
      : rest.date.toLocaleDateString()}
  {/if}
{/snippet}
