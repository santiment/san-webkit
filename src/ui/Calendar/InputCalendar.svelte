<svelte:options immutable />

<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import PresetCalendar from './PresetCalendar.svelte'
  import { getDateFormats, MONTH_NAMES, setDayStart, setDayEnd } from '@/utils/dates'

  export let date = [new Date(), new Date()] as [Date, Date]
  export let onDateSelect: (date: Date[]) => void

  const MAX_DATE = setDayEnd(new Date())

  let inputNode: HTMLInputElement

  $: if (inputNode) setInputValue(date)

  function setInputValue(dates: [Date, Date]) {
    inputNode.value = formatValue(dates)
  }

  function changeCalendar() {
    const dates = validateInput(inputNode.value)

    if (dates) onDateSelect(dates)
  }

  function parseInputData(input: string) {
    const parsedInput = input.split(' - ').map((item) => item.split('/'))
    return [
      parsedInput,
      parsedInput.map(
        ([day, month, year]) => new Date(`${month || 1}/${day || 1}/20${year || 23}`),
      ),
    ] as [[[string, string, string], [string, string, string]], [Date, Date]]
  }

  function validateInput(input: string) {
    const [parsedInput, dates] = parseInputData(input)

    let [from, to] = dates

    if (+from === +to) {
      setDayStart(from)
    } else if (!to) {
      to = new Date(from)
    }

    dates[1] = to = setDayEnd(to)
    if (dates[1] > MAX_DATE) dates[1] = MAX_DATE

    let msg = getValidityMsg(parsedInput[0]) || getValidityMsg(parsedInput[1])
    if (from > to) {
      msg = 'Left date should be before right date'
    }

    inputNode.setCustomValidity(msg)
    inputNode.reportValidity()

    return msg ? null : dates
  }

  function fixInputValue() {
    const caret = inputNode.selectionStart as number
    setInputValue(parseInputData(inputNode.value)[1])

    inputNode.selectionStart = caret
    inputNode.selectionEnd = caret
  }

  function onBlur() {
    if (formatValue(date) !== inputNode.value) {
      changeCalendar()
    }
  }

  function onClick() {
    const caret = inputNode.selectionStart as number

    if ((inputNode.selectionEnd as number) - caret !== 2) {
      fixInputValue()
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
      changeCalendar()
    } else if (key === 'Backspace') {
      if (checkIsValidNumber(charBeforeCaret)) return
    } else if (NavigationChar[key]) {
      fixInputValue()
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

  const checkIsValidNumber = (char: string | number) =>
    Number.isFinite(+char) && char.toString().trim() !== ''

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

  //

  const getDaysInMonth = (year, month) => new Date(20 + year, month, 0).getDate()

  function getValidityMsg(dateSettings?: [string, string, string]) {
    if (!dateSettings) return ''

    const [day, fullMonth, year] = dateSettings

    const month = +fullMonth - 1
    if (month < 0 || month > 11) {
      return 'Month value should be between "1" and "12"'
    }

    const daysInMonth = getDaysInMonth(year, fullMonth)
    if (+day > daysInMonth) {
      return `${MONTH_NAMES[month]} has "${daysInMonth}" days, but tried to set "${day}"`
    }

    return ''
  }

  function formatValue(dates: [Date, Date]) {
    return formatDate(dates[0]) + ' - ' + formatDate(dates[1])
  }
</script>

<PresetCalendar {...$$restProps} {date} {onDateSelect} let:trigger let:classes>
  <label use:trigger class="relative row v-center">
    <input
      bind:this={inputNode}
      class="btn--s {classes}"
      type="text"
      value={formatValue(date)}
      on:click={onClick}
      on:keydown={onKeyDown}
      on:blur={onBlur}
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
