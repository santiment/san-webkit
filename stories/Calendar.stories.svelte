<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Calendar, { PresetCalendar } from '@/ui/Calendar'
</script>

<Meta title="Example/CalendarSvelte" />

<Story name="CalendarSvelte">
  <div class="row">
    Single date:

    <Calendar onDateSelect={console.log} />
  </div>

  <div class="row mrg-xl mrg--t mrg--b">
    Range:

    <Calendar range onDateSelect={console.log} />
  </div>

  <div class="row">
    Presets:
    <PresetCalendar onDateSelect={console.log} />
  </div>
</Story>
