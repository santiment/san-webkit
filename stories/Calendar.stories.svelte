<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Calendar, { PresetCalendar } from '@/ui/Calendar'

  const date = new Date()
  date.setDate(date.getDate() - 10)
</script>

<Meta title="Example/CalendarSvelte" />

<Story name="CalendarSvelte">
  <div class="row">
    Single date:

    <Calendar {date} onDateSelect={console.log} />
  </div>

  <div class="row mrg-xl mrg--t mrg--b">
    Range:

    <Calendar date={[date, date]} range onDateSelect={console.log} />
  </div>

  <div class="row">
    Presets:
    <PresetCalendar date={[date, date]} onDateSelect={console.log} class="mrg-s mrg--l" />
  </div>
</Story>
