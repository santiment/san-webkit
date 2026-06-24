<script lang="ts">
  import { CalendarDate, getLocalTimeZone } from '@internationalized/date'

  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { formatValue, useInputCalendar } from '$ui/core/InputCalendar/flow.svelte.js'

  import Calendar from './Calendar.svelte'

  type TProps = {
    dates: [Date, Date]
    buttonClass?: string
    rootClass?: string
    onChange: (dates: [Date, Date]) => void
  }
  let { dates, buttonClass, rootClass, onChange }: TProps = $props()

  let { inputNode, onKeyDown, onInput, onClick, onBlur } = useInputCalendar(() => dates, onChange)

  const localTimeZone = getLocalTimeZone()
  const range = $derived.by(() => {
    const [from, to] = dates

    return [
      new CalendarDate(from.getFullYear(), from.getMonth() + 1, from.getDate()),
      new CalendarDate(to.getFullYear(), to.getMonth() + 1, to.getDate()),
    ] as const
  })

  let isOpened = $state(false)
</script>

<Popover
  noStyles
  class={cn('z-10 shadow-dropdown dark:shadow-none', rootClass)}
  bind:isOpened={() => isOpened, () => {}}
  contentProps={{
    trapFocus: false,
    onInteractOutside: (e) => {
      const target = e.target as HTMLElement
      if (target.closest('#' + inputNode.$.parentElement!.id)) return

      onBlur()
      isOpened = false
    },
  }}
>
  {#snippet content()}
    <div class="flex divide-x">
      <Calendar
        {range}
        targetCursor={0}
        timeZone={localTimeZone}
        onSelect={(date) => onChange([date, dates[1]])}
      ></Calendar>
      <Calendar
        {range}
        targetCursor={1}
        timeZone={localTimeZone}
        onSelect={(date) => onChange([dates[0], date])}
      ></Calendar>
    </div>
  {/snippet}

  {#snippet children({ props }: { props: Record<string, any> })}
    <Button
      {...props}
      as="label"
      variant="border"
      icon="calendar"
      class={cn('relative w-[180px] whitespace-nowrap', buttonClass)}
    >
      <input
        class={cn('cursor-pointer select-none bg-transparent outline-none')}
        bind:this={inputNode.$}
        type="text"
        value={formatValue(dates)}
        onclick={onClick}
        onkeydown={onKeyDown}
        oninput={onInput}
        onfocus={() => (isOpened = true)}
        onpointerdown={(e) => {
          e.stopImmediatePropagation()
          isOpened = true
        }}
      />
    </Button>
  {/snippet}
</Popover>

<style>
  :global(.calendar-restrict-after ~ span),
  :global(span:has(~ .calendar-restrict-before)) {
    cursor: not-allowed;
    color: var(--mystic);
    background: none !important;
  }
</style>
