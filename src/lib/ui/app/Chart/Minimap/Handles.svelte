<script lang="ts">
  import { useTimeZoneCtx } from '$lib/ctx/time/index.js'
  import { getFormattedDayMonthYear } from '$lib/utils/dates/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  type TProps = {
    minimapWidth: number
    leftHandleCoordinates: number
    rightHandleCoordinates: number
    leftHandleDate: Date
    rightHandleDate: Date
    onpointerdown: HTMLButtonElement['onpointerdown']
  }
  let {
    minimapWidth,
    leftHandleCoordinates,
    rightHandleCoordinates,
    leftHandleDate,
    rightHandleDate,
    onpointerdown,
  }: TProps = $props()

  const { applyTimeZoneOffset } = useTimeZoneCtx.get()

  function formatDate(date: Date) {
    return getFormattedDayMonthYear(applyTimeZoneOffset(new Date(date)))
  }
</script>

<div
  class="area absolute flex h-full center"
  style:--minimap-left={leftHandleCoordinates}
  style:--minimap-right={minimapWidth - rightHandleCoordinates}
>
  {@render handle({ date: leftHandleDate, class: 'left-0 -translate-x-1' })}

  <div class="absolute inset-0 z-[0] bg-athens"></div>

  {@render handle({ date: rightHandleDate, class: 'right-0 translate-x-1' })}
</div>

{#snippet handle({ date, class: className }: { date: Date; class: string })}
  <Button
    variant="plain"
    explanation={formatDate(date)}
    class={cn('chart-minimap-handle z-[2] rounded-sm text-center', className)}
    style="--expl-align-x:-48%"
    {onpointerdown}
  ></Button>
{/snippet}

<style>
  .area {
    left: calc(var(--minimap-left) * 1px);
    right: calc(var(--minimap-right) * 1px);
  }

  .area::before,
  .area::after {
    content: '';
    display: block;
    position: absolute;
    width: 1px;
    height: 100%;
    background: var(--white);
    opacity: 0.8;
    z-index: 1;
  }

  .area::before {
    right: 100%;
    transform-origin: center right;
    transform: scaleX(var(--minimap-left));
  }

  .area::after {
    left: 100%;
    transform-origin: center left;
    transform: scaleX(var(--minimap-right));
  }
</style>
