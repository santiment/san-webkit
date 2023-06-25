<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import PresetCalendar from './PresetCalendar.svelte'
  import { getDateFormats } from '@/utils/dates'

  export let date = [new Date(), new Date()]
  export let onDateSelect: (date: Date[]) => void

  function onClick({ currentTarget }: any) {
    const inputNode = currentTarget as HTMLInputElement
    const caret = inputNode.selectionStart as number

    if ((inputNode.selectionEnd as number) - caret !== 2) {
      // updateInput(fixDateRangeString(target))
      selectNextGroup(inputNode, false, caret)
    } else {
      inputNode.selectionStart = caret
      inputNode.selectionEnd = caret // NOTE: Needed to preserve active selection [@vanguard | Jun 1, 2020]
      inputNode.selectionEnd = caret + 2
    }
  }

  function onKeyDown(e: KeyboardEvent) {
    const { key, currentTarget } = e
    const inputNode = currentTarget as HTMLInputElement & {
      selectionStart: number
      selectionEnd: number
    }

    if (inputNode.selectionEnd - inputNode.selectionStart > 2) {
      selectNextGroup(inputNode)
    }

    const beforeCaretIndex = inputNode.selectionStart - 1
    const charBeforeCaret = inputNode.value[beforeCaretIndex]
    const charAfterCaret = inputNode.value[inputNode.selectionStart]

    if (key === 'Enter') {
      // changeCalendar()
    } else if (key === 'Backspace') {
      // if (canModifyChar(charBeforeCaret)) return
    } else if (NavigationChar[key]) {
      // updateInput(fixDateRangeString(inputNode))
      selectNextGroup(inputNode, key === 'ArrowRight', beforeCaretIndex + 1)
    } else if (
      +checkIsValidNumber(key) ^
      (BlockingNeighbourChar[charBeforeCaret] && BlockingNeighbourChar[charAfterCaret])
    ) {
      return
    }

    return e.preventDefault()
  }

  export function selectNextGroup(
    node: HTMLInputElement,
    isRightDir = false,
    caret = node.selectionStart,
  ) {
    const left = (isRightDir ? nextModifyableGroupIndex : prevModifyableGroupIndex)(caret as number)
    node.selectionStart = left
    node.selectionEnd = left + 2
  }

  // -------

  const NavigationChar = { ArrowLeft: true, ArrowRight: true }
  const BlockingNeighbourChar = { ' ': true, '-': true }

  const checkIsValidNumber = (char: string | number) => Number.isFinite(+char)

  const groupStartIndeces = [0, 3, 6, 11, 14, 17]
  function prevModifyableGroupIndex(caret: number) {
    for (let i = groupStartIndeces.length - 1; i > -1; i--) {
      if (groupStartIndeces[i] < caret) {
        return groupStartIndeces[i]
      }
    }
    return groupStartIndeces[0]
  }

  function nextModifyableGroupIndex(caret: number) {
    for (let i = 0; i < groupStartIndeces.length; i++) {
      if (groupStartIndeces[i] > caret) {
        return groupStartIndeces[i]
      }
    }
    return groupStartIndeces[groupStartIndeces.length - 1]
  }

  function formatDate(date: Date) {
    const { DD, MM, YY } = getDateFormats(date)
    return `${DD}/${MM}/${YY}`
  }
</script>

<PresetCalendar {...$$restProps} {date} {onDateSelect} let:trigger let:classes>
  <label use:trigger class="relative row v-center">
    <input
      class="btn--s {classes}"
      type="text"
      value={formatDate(date[0]) + ' - ' + formatDate(date[1])}
      on:click={onClick}
      on:keydown={onKeyDown}
    />
    <Svg id="calendar" w="16" class="mrg-s mrg--l $style.icon" />
  </label>
</PresetCalendar>

<style>
  .icon {
    position: absolute;
    pointer-events: none;
    right: 12px;
  }
</style>
