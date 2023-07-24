<script lang="ts">
  import type { DateRange } from '@/ui/Calendar/PresetCalendar.svelte'

  import Calendar, { PresetCalendar, InputCalendar } from '@/ui/Calendar'

  const date = new Date()
  date.setDate(date.getDate() - 10)

  let dates: DateRange = [date, new Date()]
</script>

<div class="row v-center">
  Single date:

  <Calendar {date} onDateSelect={console.log} />
</div>

<div class="row v-center mrg-xl mrg--t mrg--b">
  Range:

  <Calendar date={[date, new Date()]} range onDateSelect={console.log} />
</div>

<div class="row v-center mrg-xl mrg--b">
  Presets:

  <PresetCalendar date={[date, new Date()]} onDateSelect={console.log} class="mrg-s mrg--l" />
</div>

<div class="row v-center">
  Input:

  <InputCalendar date={dates} onDateSelect={(data) => (dates = data)} />
</div>
