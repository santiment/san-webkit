<script lang="ts">
  import type { DateValue } from '@internationalized/date'

  import { Calendar, RangeCalendar } from 'bits-ui'
  import Svg from '$ui/core/Svg/index.js'
  import CalendarHeading from './CalendarHeading.svelte'

  type Props = {
    range?: boolean
    timeZone: string
    placeholder: DateValue
  }

  let { range = false, placeholder = $bindable(), timeZone }: Props = $props()

  const Base = range ? RangeCalendar : Calendar
</script>

<Base.Header class="flex items-center justify-between gap-2 border-b p-2">
  <Base.PrevButton
    class="inline-flex size-8 rotate-180 items-center justify-center rounded-lg fill-waterloo hover:bg-athens"
  >
    <Svg id="arrow-right" w="8" />
  </Base.PrevButton>
  <CalendarHeading bind:placeholder {timeZone} />
  <Base.NextButton
    class="inline-flex size-8 items-center justify-center rounded-lg fill-waterloo hover:bg-athens"
  >
    <Svg id="arrow-right" w="8" />
  </Base.NextButton>
</Base.Header>
