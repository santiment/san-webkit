<script lang="ts">
  import DatePicker from '$ui/core/Calendar'

  let date = new Date()
  let dates: [Date, Date] = [new Date(), new Date()]
</script>

<div class="flex max-w-[330px] flex-col justify-center gap-4 p-6">
  <div class="flex flex-row items-center gap-2">
    Single date:
    <DatePicker bind:date />
  </div>
  <div class="flex flex-row items-center gap-2">
    Range:
    <DatePicker date={dates} />
  </div>
</div>
