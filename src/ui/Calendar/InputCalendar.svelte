<svelte:options immutable />

<script lang="ts">
  import type { DateRange } from './PresetCalendar.svelte'

  import Svg from '@/ui/Svg/svelte'
  import PresetCalendar from './PresetCalendar.svelte'
  import { getDateFormats, MONTH_NAMES, setDayStart, setDayEnd } from '@/utils/dates'

  export let date: DateRange = [new Date(), new Date()]
  export let onDateSelect: (date: Date[]) => void

  const MAX_DATE = setDayEnd(new Date())

  let inputNode: HTMLInputElement
  let calendar: any

  $: if (inputNode) setInputValue(date)

  function setInputValue(dates: DateRange) {
    inputNode.value = formatValue(dates)
  }

  function changeCalendar() {
    const dates = validateInput(inputNode.value)

    if (dates) {
      setInputValue(dates)
      calendar?.selectDate(dates)
      onDateSelect(dates)
    }
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
    // if (validateInput(inputNode.value)) {
    //   return
    // }

    let caret = inputNode.selectionStart as number
    const [parsed, dates] = parseInputData(inputNode.value)
    setInputValue(dates)

    let offset = null as null | number
    parsed.some((data, i) => {
      const changed = data.findIndex((date) => date.toString().length < 2)
      offset = changed > -1 ? changed + i * 3 : null
      return offset !== null
    })

    if (offset !== null && caret > GROUP_INDICES[offset]) {
      caret += 1
    }

    inputNode.selectionStart = caret
    inputNode.selectionEnd = caret

    return caret
  }

  function onBlur() {
    if (formatValue(date) !== inputNode.value) {
      fixInputValue()
      changeCalendar()
    }
  }

  function onClick() {
    const caret = inputNode.selectionStart as number

    if ((inputNode.selectionEnd as number) - caret !== 2) {
      selectNextGroup(inputNode, false, fixInputValue())
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
      selectNextGroup(inputNode, key === 'ArrowRight', fixInputValue())
    } else if (
      +checkIsValidNumber(key) ^
      (BlockingNeighbourChar[charBeforeCaret] && BlockingNeighbourChar[charAfterCaret])
    ) {
      return
    }

    return e.preventDefault()
  }

  function onInput() {
    const start = inputNode.selectionStart
    const nextGroupIndex = nextModifyableGroupIndex(start)

    if (start + 1 === nextGroupIndex || start + 3 === nextGroupIndex) {
      selectNextGroup(inputNode, true)
    }
  }

  export function selectNextGroup(
    node: HTMLInputElement,
    isRightDir = false,
    caret = node.selectionStart,
  ) {
    const left = (isRightDir ? nextModifyableGroupIndex : prevModifyableGroupIndex)(caret as number)
    node.selectionStart = left
    node.selectionEnd = left + 2

    const isFirstDateFocused = node.selectionStart < 11

    calendar?.setViewDate(date[isFirstDateFocused ? 0 : 1])
  }

  // -------

  const NavigationChar = { ArrowLeft: true, ArrowRight: true }
  const BlockingNeighbourChar = { ' ': true, '-': true }

  const checkIsValidNumber = (char: string | number) =>
    Number.isFinite(+char) && char.toString().trim() !== ''

  const GROUP_INDICES = [0, 3, 6, 11, 14, 17]
  function prevModifyableGroupIndex(caret: number) {
    for (let i = GROUP_INDICES.length - 1; i > -1; i--) {
      if (GROUP_INDICES[i] < caret) {
        return GROUP_INDICES[i]
      }
    }
    return GROUP_INDICES[0]
  }

  function nextModifyableGroupIndex(caret: number) {
    for (let i = 0; i < GROUP_INDICES.length; i++) {
      if (GROUP_INDICES[i] > caret) {
        return GROUP_INDICES[i]
      }
    }
    return GROUP_INDICES[GROUP_INDICES.length - 1]
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

  function formatValue(dates: DateRange | [Date]) {
    const formattedStart = formatDate(dates[0])
    return dates[1] ? formattedStart + ' - ' + formatDate(dates[1]) : formattedStart
  }
</script>

<PresetCalendar {...$$restProps} {date} {onDateSelect} bind:calendar let:trigger let:classes>
  <label use:trigger class="relative {classes}">
    <input
      bind:this={inputNode}
      class="btn-2 btn--s"
      type="text"
      value={formatValue(date)}
      on:click={onClick}
      on:keydown={onKeyDown}
      on:blur={onBlur}
      on:input={onInput}
    />
    <Svg id="calendar" w="16" class="mrg-s mrg--l $style.icon" />
  </label>
</PresetCalendar>

<style>
  label {
    padding: 0;
    border: none;
  }

  input {
    color: var(--black) !important;
    width: 180px;
    min-width: 180px;
  }

  .icon {
    position: absolute;
    pointer-events: none;
    right: 12px;
  }
</style>
