<script lang="ts">
  import DatePicker from '$ui/core/Calendar/DatePicker.svelte'
  import InputCalendar from '$ui/core/InputCalendar/index.js'

  let date = new Date()
  let dateOld = new Date(2017, 7, 9)
  let dates: [Date, Date] = [new Date(), new Date()]

  function onChangeDate(_date: Date) {
    date = _date
    console.log('date changed')
  }

  function onChangeDates(_dates: [Date, Date], timeRange?: string) {
    dates = _dates
    console.log('dates changed', _dates, timeRange)
  }
</script>

<div class="flex flex-col justify-center gap-4 p-6">
  <div class="flex flex-row items-center gap-2">
    Single date:
    <DatePicker {date} onChange={onChangeDate} />
  </div>
  <div class="flex flex-row items-center gap-2">
    Single date 05/2015 - 07/2020:
    <DatePicker
      date={dateOld}
      onChange={(date: Date) => (dateOld = date)}
      minDate={new Date(2015, 4)}
      maxDate={new Date(2020, 6)}
    />
  </div>
  <div class="flex flex-row items-center gap-2">
    Range:
    <DatePicker date={dates} onChange={onChangeDates} />
  </div>
  <div class="flex flex-row items-center gap-2">
    InputCalendar:
    <InputCalendar date={dates} onChange={onChangeDates} />
  </div>
  <div class="flex flex-row items-center gap-2">
    With Presets:
    <DatePicker date={dates} onChange={onChangeDates} withPresets />
  </div>
</div>
