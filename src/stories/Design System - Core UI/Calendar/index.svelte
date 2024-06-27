<script lang="ts">
  import DatePicker from '$ui/core/Calendar/DatePicker.svelte'

  let date = new Date()
  let dateOld = new Date(2017, 7, 9)
  let dates: [Date, Date] = [new Date(), new Date()]
</script>

<div class="flex flex-col justify-center gap-4 p-6">
  <div class="flex flex-row items-center gap-2">
    Single date:
    <DatePicker bind:date />
  </div>
  <div class="flex flex-row items-center gap-2">
    Single date 05/2015 - 07/2020:
    <DatePicker bind:date={dateOld} minDate={new Date(2015, 4)} maxDate={new Date(2020, 6)} />
  </div>
  <div class="flex flex-row items-center gap-2">
    Range:
    <DatePicker date={dates} />
  </div>
  <div class="flex flex-row items-center gap-2">
    With Presets:
    <DatePicker date={dates} withPresets />
  </div>
</div>
