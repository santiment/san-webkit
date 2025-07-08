<svelte:options immutable />

<script>import Svg from './../../ui/Svg/svelte';
import PresetCalendar from './PresetCalendar.svelte';
import { getDateFormats, MONTH_NAMES, setDayStart, setDayEnd } from './../../utils/dates';
export let date = [new Date(), new Date()];
export let onDateSelect;
const MAX_DATE = setDayEnd(new Date());
let inputNode;
let calendar;
$: if (inputNode)
    setInputValue(date);
function setInputValue(dates) {
    inputNode.value = formatValue(dates);
}
function changeCalendar(wasInputBlurred = false) {
    const dates = validateInput(inputNode.value);
    if (dates) {
        setInputValue(dates);
        // NOTE: Needed since calendar is unmounted on blur [@vanguard | 27 Jul, 2023]
        if (wasInputBlurred) {
            onDateSelect(dates);
        }
        else {
            calendar?.selectDate(dates);
        }
    }
}
function parseInputData(input) {
    const parsedInput = input.split(' - ').map((item) => item.split('/'));
    return [
        parsedInput,
        parsedInput.map(([day, month, year]) => {
            const fullYear = `20${year || 23}`;
            const fullMonth = Math.min(+month, 12) || 1;
            const fullDays = Math.min(+day || 1, getDaysInMonth(year, fullMonth));
            return new Date(`${fullMonth}/${fullDays}/${fullYear}`);
        }),
    ];
}
function validateInput(input) {
    const [parsedInput, dates] = parseInputData(input);
    let [from, to] = dates;
    if (+from === +to) {
        setDayStart(from);
    }
    else if (!to) {
        to = new Date(from);
    }
    dates[1] = to = setDayEnd(to);
    if (dates[1] > MAX_DATE)
        dates[1] = MAX_DATE;
    let msg = getValidityMsg(parsedInput[0]) || getValidityMsg(parsedInput[1]);
    if (from > to) {
        msg = 'Left date should be before right date';
    }
    inputNode.setCustomValidity(msg);
    inputNode.reportValidity();
    return msg ? null : dates;
}
function fixInputValue() {
    let caret = inputNode.selectionStart;
    const [parsed, dates] = parseInputData(inputNode.value);
    setInputValue(dates);
    let offset = null;
    parsed.some((data, i) => {
        const changed = data.findIndex((date) => date.toString().length < 2);
        offset = changed > -1 ? changed + i * 3 : null;
        return offset !== null;
    });
    if (offset !== null && caret > GROUP_INDICES[offset]) {
        caret += 1;
    }
    inputNode.selectionStart = caret;
    inputNode.selectionEnd = caret;
    return caret;
}
function onBlur() {
    if (formatValue(date) !== inputNode.value) {
        fixInputValue();
        changeCalendar(true);
    }
}
function onClick() {
    const caret = inputNode.selectionStart;
    if (inputNode.selectionEnd - caret !== 2) {
        selectNextGroup(inputNode, false, fixInputValue());
    }
    else {
        inputNode.selectionStart = caret;
        inputNode.selectionEnd = caret; // NOTE: Needed to preserve active selection [@vanguard | Jun 1, 2020]
        inputNode.selectionEnd = caret + 2;
    }
}
function onKeyDown(e) {
    const { key, currentTarget } = e;
    const inputNode = currentTarget;
    if (inputNode.selectionEnd - inputNode.selectionStart > 2) {
        selectNextGroup(inputNode);
    }
    const beforeCaretIndex = inputNode.selectionStart - 1;
    const charBeforeCaret = inputNode.value[beforeCaretIndex];
    const charAfterCaret = inputNode.value[inputNode.selectionStart];
    if (key === 'Enter') {
        changeCalendar();
    }
    else if (key === 'Backspace') {
        if (checkIsValidNumber(charBeforeCaret))
            return;
    }
    else if (NavigationChar[key]) {
        selectNextGroup(inputNode, key === 'ArrowRight', fixInputValue());
    }
    else if (+checkIsValidNumber(key) ^
        (BlockingNeighbourChar[charBeforeCaret] && BlockingNeighbourChar[charAfterCaret])) {
        return;
    }
    return e.preventDefault();
}
function onInput() {
    const start = inputNode.selectionStart;
    const nextGroupIndex = nextModifyableGroupIndex(start);
    if (start + 1 === nextGroupIndex ||
        start + 3 === nextGroupIndex ||
        nextGroupIndex + 2 === start) {
        selectNextGroup(inputNode, true);
        validateInput(inputNode.value);
    }
}
export function selectNextGroup(node, isRightDir = false, caret = node.selectionStart) {
    const left = (isRightDir ? nextModifyableGroupIndex : prevModifyableGroupIndex)(caret);
    node.selectionStart = left;
    node.selectionEnd = left + 2;
    const isFirstDateFocused = node.selectionStart < 11;
    calendar?.setViewDate(date[isFirstDateFocused ? 0 : 1]);
}
// -------
const NavigationChar = { ArrowLeft: true, ArrowRight: true };
const BlockingNeighbourChar = { ' ': true, '-': true };
const checkIsValidNumber = (char) => Number.isFinite(+char) && char.toString().trim() !== '';
const GROUP_INDICES = [0, 3, 6, 11, 14, 17];
function prevModifyableGroupIndex(caret) {
    for (let i = GROUP_INDICES.length - 1; i > -1; i--) {
        if (GROUP_INDICES[i] < caret) {
            return GROUP_INDICES[i];
        }
    }
    return GROUP_INDICES[0];
}
function nextModifyableGroupIndex(caret) {
    for (let i = 0; i < GROUP_INDICES.length; i++) {
        if (GROUP_INDICES[i] > caret) {
            return GROUP_INDICES[i];
        }
    }
    return GROUP_INDICES[GROUP_INDICES.length - 1];
}
function formatDate(date) {
    const { DD, MM, YY } = getDateFormats(date);
    return `${DD}/${MM}/${YY}`;
}
//
const getDaysInMonth = (year, month) => new Date(20 + year, month, 0).getDate();
function getValidityMsg(dateSettings) {
    if (!dateSettings)
        return '';
    const [day, fullMonth, year] = dateSettings;
    const month = +fullMonth - 1;
    if (month < 0 || month > 11) {
        return 'Month value should be between "1" and "12"';
    }
    const daysInMonth = getDaysInMonth(year, fullMonth);
    if (+day > daysInMonth) {
        return `${MONTH_NAMES[month]} has "${daysInMonth}" days, but tried to set "${day}"`;
    }
    return '';
}
function formatValue(dates) {
    const formattedStart = formatDate(dates[0]);
    return dates[1] ? formattedStart + ' - ' + formatDate(dates[1]) : formattedStart;
}
</script>

<PresetCalendar {...$$restProps} {date} {onDateSelect} bind:calendar let:trigger let:classes>
  <label use:trigger class="relative {classes}">
    <Svg class="s-cksi6r" id="calendar" w="16" />

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
    padding-left: 34px;
  }

  :global(.s-cksi6r) {
    position: absolute;
    pointer-events: none;
    left: 11px;
  }
</style>
