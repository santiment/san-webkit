<script lang="ts">
  import type { DateValue } from '@internationalized/date'

  import { Calendar } from 'bits-ui'
  import { fromDate } from '@internationalized/date'

  import { cn } from '../../utils/index.js'
  import { useUiCtx } from '../../../ctx/ui/index.svelte.js'

  import { createPlaceholder } from './utils.svelte.js'
  import CalendarBody from './CalendarBody.svelte'
  import CalendarHeader from './CalendarHeader.svelte'

  type TProps = {
    class?: string
    date: Date
    timeZone: string
    minValue?: DateValue
    maxValue?: DateValue
    onChange?: (date: Date) => void
  }
  const { class: className, date, minValue, maxValue, timeZone, onChange }: TProps = $props()

  const { ui } = useUiCtx()

  const value = $derived(fromDate(date, timeZone))

  const placeholder = createPlaceholder(() => value)

  const onValueChange = (update: DateValue | undefined) => {
    if (!update) return

    onChange?.(update.toDate(timeZone))
  }
</script>

<Calendar.Root
  --active-ghost-button-bg={ui.$$.isNightMode ? 'var(--porcelain)' : undefined}
  type="single"
  class={cn('max-w-max rounded border bg-white sm:border-0 dark:bg-athens', className)}
  weekdayFormat="short"
  fixedWeeks
  {value}
  {onValueChange}
  bind:placeholder={placeholder.date}
  {minValue}
  {maxValue}
>
  {#snippet children({ months, weekdays })}
    <CalendarHeader bind:placeholder={placeholder.date} {minValue} {maxValue} />

    <CalendarBody {months} {weekdays} />
  {/snippet}
</Calendar.Root>
