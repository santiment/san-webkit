<script lang="ts">
  import type { Selected } from 'bits-ui'
  import type { DateValue } from '@internationalized/date'

  import { CalendarDate, today } from '@internationalized/date'
  import Select from '../Select/Select.svelte'

  let {
    placeholder = $bindable(),
    timeZone,
  }: { placeholder: DateValue | undefined; timeZone: string } = $props()

  let curYear = $state<number | undefined>(placeholder?.year)
  let curMonth = $state<number | undefined>(placeholder?.month)

  const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' })
  const formatMonth = (month: number) => monthFormatter.format(new Date(0, month - 1, 1))

  const curDate = $derived(today(timeZone))
  const yearItems = $derived(getYearItems(curDate.year))
  const monthItems = $derived(getMonthItems(curDate.month))

  const selected = {
    get year() {
      return curYear ?? curDate.year
    },
    set year(val: number) {
      curYear = val
    },
    get month() {
      return curMonth ?? curDate.month
    },
    set month(val: number) {
      curMonth = val
    },
  }

  const selectedYear = $derived<Selected<number>>({
    value: selected.year,
    label: selected.year.toString(),
  })
  const selectedMonth = $derived<Selected<number>>({
    value: selected.month,
    label: formatMonth(selected.month),
  })

  function getYearItems(curYear: number) {
    const minYear = 2009
    const maxYear = curYear

    return Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
      const year = minYear + i

      return { value: year, label: year.toString() }
    })
  }

  function getMonthItems(curMonth: number) {
    return Array.from({ length: 12 }, (_, i) => {
      const month = i + 1

      return { value: month, label: formatMonth(month) }
    })
  }

  function onYearChange(change: Selected<number> | undefined) {
    if (!change) return
    curYear = change.value
    updatePlaceholder(selected.month, curYear)
  }

  function onMonthChange(change: Selected<number> | undefined) {
    if (!change) return
    curMonth = change.value
    updatePlaceholder(curMonth, selected.year)
  }

  function updatePlaceholder(month: number, year: number) {
    placeholder = new CalendarDate(year, month, 1)
  }
</script>

<div class="flex gap-2">
  <Select items={monthItems} selected={selectedMonth} onSelectedChange={onMonthChange} />

  <Select items={yearItems} selected={selectedYear} onSelectedChange={onYearChange} />
</div>
