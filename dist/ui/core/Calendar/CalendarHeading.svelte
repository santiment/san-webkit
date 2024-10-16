<script lang="ts">import { CalendarDate } from "@internationalized/date";
import Select from "../Select/Select.svelte";
let {
  placeholder = $bindable(),
  minValue,
  maxValue
} = $props();
const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
const formatMonth = (month) => monthFormatter.format(new Date(0, month - 1, 1));
const maxYearSelected = $derived(placeholder.year === maxValue.year);
const minYearSelected = $derived(placeholder.year === minValue.year);
const yearItems = $derived(getYearItems(minValue.year, maxValue.year));
const monthItems = $derived(
  getMonthItems(
    minYearSelected ? minValue.month : void 0,
    maxYearSelected ? maxValue.month : void 0
  )
);
const selectedYear = $derived({
  value: placeholder.year,
  label: placeholder.year.toString()
});
const selectedMonth = $derived({
  value: placeholder.month,
  label: formatMonth(placeholder.month)
});
function getYearItems(minYear, maxYear) {
  return Array.from({ length: maxYear - minYear + 1 }, (_, i) => {
    const year = minYear + i;
    return { value: year, label: year.toString() };
  });
}
function getMonthItems(minMonth = 1, maxMonth = 12) {
  return Array.from({ length: maxMonth - minMonth + 1 }, (_, i) => {
    const month = minMonth + i;
    return { value: month, label: formatMonth(month) };
  });
}
function onYearChange(change) {
  if (!change) return;
  updatePlaceholder(placeholder.month, change.value);
}
function onMonthChange(change) {
  if (!change) return;
  updatePlaceholder(change.value, placeholder.year);
}
function updatePlaceholder(month, year) {
  placeholder = new CalendarDate(year, month, 1);
}
</script>

<div class="flex gap-2">
  <Select items={monthItems} selected={selectedMonth} onSelectedChange={onMonthChange} />

  <Select items={yearItems} selected={selectedYear} onSelectedChange={onYearChange} />
</div>
