<script lang="ts">
  import DatePicker from '$ui/core/Calendar/index.js'
  import Button from '$ui/core/Button/index.js'

  import { formatValue, useInputCalendar } from './utils.svelte.js'

  type TProps = {
    date: [Date, Date]
    onChange: (date: [Date, Date]) => void
  }

  const { date, onChange }: TProps = $props()

  let isOpened = $state(false)

  let { labelElement, inputNode, onKeyDown, onInput, onClick, onBlur } = useInputCalendar(
    date,
    onChange,
  )
</script>

<div class="relative" onfocusout={(e) => onBlur(e, (newIsOpened) => (isOpened = newIsOpened))}>
  <DatePicker
    {date}
    {onChange}
    class="relative"
    popoverRootProps={{
      closeOnOutsideClick: false,
      disableFocusTrap: true,
      closeFocus: null,
      openFocus: null,
      portal: labelElement.$,
      outerControl: true,
    }}
    bind:popoverIsOpened={isOpened}
    withPresets
  >
    <Button as="label" ref={labelElement} variant="border" icon="calendar">
      <input
        class="cursor-pointer select-none bg-transparent outline-none"
        bind:this={inputNode.$}
        type="text"
        value={formatValue(date)}
        onclick={onClick}
        onfocus={() => (isOpened = true)}
        onkeydown={onKeyDown}
        oninput={onInput}
      />
    </Button>
  </DatePicker>
</div>
