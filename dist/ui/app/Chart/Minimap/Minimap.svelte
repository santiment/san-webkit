<script lang="ts">
  import { useItemViewportPriorityCtx } from '../../../../ctx/viewport-priority/index.svelte.js'
  import {
    CRYPTO_ERA_START_DATE,
    TODAY_END_DATE,
    DAYS_SINCE_CRYPTO_ERA_START,
    modifyDate,
  } from '../../../../utils/dates/index.js'
  import { createValueMap } from '../../../../utils/index.js'
  import { cn } from '../../../utils/index.js'

  import { useChartGlobalParametersCtx } from '../ctx/index.js'
  import Canvas from './Canvas.svelte'
  import Handles from './Handles.svelte'
  import YearMarks from './YearMarks.svelte'

  type TProps = { class?: string }
  const { class: className }: TProps = $props()

  const { globalParameters } = useChartGlobalParametersCtx.get()
  const viewportPriorityCtx = useItemViewportPriorityCtx.get()

  let minimapWidth = $state(0)

  let leftHandleCoordinates = $state(0)
  let rightHandleCoordinates = $state(0)

  let leftHandleDate = $state.raw(TODAY_END_DATE)
  let rightHandleDate = $state.raw(TODAY_END_DATE)

  const fromUtcDate = $derived(globalParameters.dates$.fromUtcDate)
  const toUtcDate = $derived(globalParameters.dates$.toUtcDate)

  const mapDateToCoordinates = $derived(
    createValueMap(+CRYPTO_ERA_START_DATE, +TODAY_END_DATE, 0, minimapWidth),
  )
  const mapCoordinatesToDaysSince = $derived(
    createValueMap(0, minimapWidth, 0, DAYS_SINCE_CRYPTO_ERA_START),
  )

  $effect(() => {
    if (!minimapWidth) return

    leftHandleCoordinates = mapDateToCoordinates(+fromUtcDate)
    rightHandleCoordinates = mapDateToCoordinates(+toUtcDate)
  })

  $effect(() => {
    if (!minimapWidth) return

    leftHandleDate = calculateHandleDate(CRYPTO_ERA_START_DATE, leftHandleCoordinates)

    rightHandleDate = calculateHandleDate(
      TODAY_END_DATE,
      rightHandleCoordinates,
      DAYS_SINCE_CRYPTO_ERA_START,
    )
  })

  function calculateHandleDate(date: Date, coordinates: number, offset = 0) {
    return modifyDate(new Date(date), {
      days: Math.round(mapCoordinatesToDaysSince(coordinates)) - offset,
      utc: true,
    })
  }

  function onAreaPointerDown(e: PointerEvent) {
    const node = e.currentTarget as HTMLElement

    const isCanvas = node.tagName === 'CANVAS'
    const isLeftMove = isCanvas || node.classList.contains('left-0')
    const isRightMove = isCanvas || node.classList.contains('right-0')

    let startX = e.clientX
    let startLeft = leftHandleCoordinates
    let startRight = rightHandleCoordinates
    let wasMoved = false

    node.setPointerCapture(e.pointerId)

    node.addEventListener('pointerup', onPointerUp, { once: true })
    node.addEventListener('pointermove', onPointerMove)

    function onPointerUp() {
      node.removeEventListener('pointermove', onPointerMove)
      node.releasePointerCapture(e.pointerId)

      if (wasMoved) {
        globalParameters.changeDates(leftHandleDate.toISOString(), rightHandleDate.toISOString())
      }
    }

    function onPointerMove(e: PointerEvent) {
      wasMoved = true

      let diff = e.clientX - startX

      if (isLeftMove && isRightMove) {
        if (
          (rightHandleCoordinates >= minimapWidth && diff >= 0) ||
          (leftHandleCoordinates === 0 && diff <= 0)
        ) {
          startX = e.clientX
          startLeft = leftHandleCoordinates
          startRight = rightHandleCoordinates
          return
        }
      }

      let newLeft = startLeft + diff
      let newRight = startRight + diff

      // NOTE: Correcting first, assigning later

      if (isLeftMove) {
        if (newLeft < 0) {
          if (diff < 0) {
            newRight -= newLeft
          }

          newLeft = 0
        }
      }

      if (isRightMove) {
        if (newRight > minimapWidth) {
          if (diff > 0) {
            newLeft -= newRight - minimapWidth
          }

          newRight = minimapWidth
        }
      }

      if (isLeftMove) leftHandleCoordinates = newLeft

      if (isRightMove) rightHandleCoordinates = newRight
    }
  }
</script>

<section
  class={cn('relative flex h-[40px] select-none bg-white center', className)}
  bind:clientWidth={minimapWidth}
>
  {#if minimapWidth && (viewportPriorityCtx?.checkIsInViewport$() ?? true)}
    <Canvas onpointerdown={onAreaPointerDown}></Canvas>

    <Handles
      {minimapWidth}
      {leftHandleDate}
      {rightHandleDate}
      {leftHandleCoordinates}
      {rightHandleCoordinates}
      onpointerdown={onAreaPointerDown}
    ></Handles>
  {/if}

  <YearMarks></YearMarks>
</section>

<style>
  :global(.chart-minimap-handle) {
    position: absolute;
    z-index: 2;
    height: 1.25rem;
    width: 0.5rem;
    cursor: grab;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--c-waterloo) / var(--tw-bg-opacity))
}
</style>
