<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Calendar, { PresetCalendar, InputCalendar } from '@/ui/Calendar'

  const date = new Date()
  date.setDate(date.getDate() - 10)

  let dates = [date, new Date()]
</script>

<Meta title="Example/CalendarSvelte" />

<Story name="CalendarSvelte">
  <div class="row">
    Single date:

    <Calendar {date} onDateSelect={console.log} />
  </div>

  <div class="row mrg-xl mrg--t mrg--b">
    Range:

    <Calendar date={[date, new Date()]} range onDateSelect={console.log} />
  </div>

  <div class="row mrg-xl mrg--b">
    Presets:
    <PresetCalendar date={[date, date]} onDateSelect={console.log} class="mrg-s mrg--l" />
  </div>

  <div class="row">
    Input:
    <InputCalendar date={dates} onDateSelect={(data) => (dates = data)} />
  </div>
</Story>
