<script lang="ts">
  import DatePicker from '$ui/core/Calendar/index.js'
  import { cn } from '$ui/utils/index.js'

  import { formatValue, useInputCalendar } from './flow.svelte.js'

  type TProps = {
    date: [Date, Date]
    rootClass?: string
    buttonClass?: string
    calendarClass?: string
    inputClass?: string
    onChange: (date: [Date, Date], timeRange?: string) => void
  }

  const { rootClass, buttonClass, calendarClass, inputClass, date, onChange }: TProps = $props()

  let isOpened = $state(false)

  let { inputNode, onKeyDown, onInput, onClick, onBlur } = useInputCalendar(() => date, onChange)

  function getIsOpened() {
    return isOpened
  }
</script>

<!-- prettier-ignore-start -->
<DatePicker
  {date}
  {onChange}
  buttonClass={cn("relative w-[180px]",buttonClass)}
  {rootClass}
  {calendarClass}
  popoverContentProps={{
    trapFocus: false,
    onInteractOutside: (e) => {
      const target = e.target as HTMLElement
      if(target.closest('#' + inputNode.$.parentElement!.id)) return

      onBlur()
      isOpened = false
    }
  }}
  bind:popoverIsOpened={getIsOpened, () => {}}
  withPresets
  as="label"
>
  <!-- prettier-ignore-end -->
  <input
    class={cn("cursor-pointer select-none bg-transparent outline-none", inputClass)}
    bind:this={inputNode.$}
    type="text"
    value={formatValue(date)}
    onclick={onClick}
    onkeydown={onKeyDown}
    oninput={onInput}
    onfocus={() => (isOpened = true)}
    onpointerdown={(e) => {
      e.stopImmediatePropagation()
      isOpened = true
    }}
  />
</DatePicker>
