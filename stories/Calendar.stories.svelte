<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf'
  import Calendar from '@/ui/Calendar/index.svelte'
  import CalendarWithPresets from '@/ui/Calendar/CalendarWithPresets.svelte'

  let date
  let dateRange
</script>

<Meta title="Example/CalendarSvelte" />

<Story name="CalendarSvelte">
  <div style="display: flex; justify-content: space-evenly">
    <Calendar bind:date onDateSelect={console.log} />
    <Calendar bind:date={dateRange} range onDateSelect={console.log} />
  </div>
</Story>

<Story name="CalendarSvelte With Presets">
  <div style="display: flex; justify-content: space-evenly">
    <CalendarWithPresets bind:date={dateRange} onDateSelect={console.log} />
  </div>
</Story>
