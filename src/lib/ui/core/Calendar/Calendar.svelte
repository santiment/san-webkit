<script lang="ts">
  import type { DateValue } from '@internationalized/date'

  import { BROWSER } from 'esm-env'
  import { Calendar } from 'bits-ui'
  import { fromDate, getLocalTimeZone } from '@internationalized/date'
  import { cn } from '$ui/utils/index.js'
  import { createPlaceholder } from './utils.svelte.js'
  import CalendarBody from './CalendarBody.svelte'
  import CalendarHeader from './CalendarHeader.svelte'

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
  <CalendarHeader bind:placeholder={placeholder.date} {timeZone} />

  <CalendarBody {months} {weekdays} />
</Calendar.Root>
