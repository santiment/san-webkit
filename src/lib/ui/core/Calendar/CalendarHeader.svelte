<script lang="ts">
  import type { DateValue } from '@internationalized/date'

  import { Calendar, RangeCalendar } from 'bits-ui'
  import Svg from '$ui/core/Svg/index.js'
  import { useDeviceCtx } from '$lib/ctx/device/index.svelte.js'
  import MonthViewSelect from './MonthViewSelect.svelte'
  import { formatMonth } from './utils.svelte.js'

  type TProps = {
    range?: boolean
    placeholder: DateValue
    minValue: DateValue
    maxValue: DateValue
  }

  let { range = false, placeholder = $bindable(), minValue, maxValue }: TProps = $props()

  const { device } = useDeviceCtx()

  const Base = $derived(range ? RangeCalendar : Calendar)
  const isPhone = $derived(device.$.isPhone)
</script>

<Base.Header class="flex items-center justify-between gap-2 border-b p-2 sm:px-5 sm:py-3">
  <Base.PrevButton
    class="inline-flex size-8 rotate-180 items-center justify-center rounded-lg fill-waterloo hover:bg-athens"
  >
    <Svg id="arrow-right" w="10" />
  </Base.PrevButton>
  {#if isPhone}
    <h3 class="text-base font-medium">
      {formatMonth(placeholder.month)}
      {placeholder.year}
    </h3>
  {:else}
    <MonthViewSelect bind:placeholder {minValue} {maxValue} />
  {/if}
  <Base.NextButton
    class="inline-flex size-8 items-center justify-center rounded-lg fill-waterloo hover:bg-athens"
  >
    <Svg id="arrow-right" w="10" />
  </Base.NextButton>
</Base.Header>
