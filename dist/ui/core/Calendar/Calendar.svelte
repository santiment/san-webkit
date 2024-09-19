<script lang="ts">import { Calendar } from "bits-ui";
import { fromDate } from "@internationalized/date";
import { cn } from "../../utils/index.js";
import { createPlaceholder } from "./utils.svelte.js";
import CalendarBody from "./CalendarBody.svelte";
import CalendarHeader from "./CalendarHeader.svelte";
let {
  class: className,
  date = $bindable(),
  minValue,
  maxValue,
  timeZone
} = $props();
const value = $derived(fromDate(date, timeZone));
const placeholder = createPlaceholder(() => value);
const onValueChange = (update) => {
  if (!update) return;
  date = update.toDate(timeZone);
};
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
  {minValue}
  {maxValue}
>
  <CalendarHeader bind:placeholder={placeholder.date} {minValue} {maxValue} />

  <CalendarBody {months} {weekdays} />
</Calendar.Root>
