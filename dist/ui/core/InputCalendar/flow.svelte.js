import { ss } from 'svelte-runes';
import { MONTH_NAMES, setDayStart, setDayEnd, getDateFormats } from '../../../utils/dates/index.js';
const MAX_DATE = setDayEnd(new Date());
export const getDaysInMonth = (year, month) => new Date(20 + year, month, 0).getDate();
export function formatDate(date) {
    const { DD, MM, YY } = getDateFormats(date);
    return `${DD}/${MM}/${YY}`;
}
export function formatValue(dates) {
    const formattedStart = formatDate(dates[0]);
    return dates[1] ? formattedStart + ' - ' + formatDate(dates[1]) : formattedStart;
}
export function parseInputData(input) {
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
export function useInputCalendar(getDate, onDateSelect) {
    const inputNode = ss();
    $effect(() => {
        if (inputNode) {
            setInputValue(getDate());
        }
    });
    function setInputValue(dates) {
        inputNode.$.value = formatValue(dates);
    }
    function changeCalendar() {
        const dates = validateInput(inputNode.$.value);
        if (dates) {
            setInputValue(dates);
            onDateSelect(dates);
        }
    }
    function validateInput(input) {
        const [parsedInput, dates] = parseInputData(input);
        const [from] = dates;
        let to = dates[1];
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
        inputNode.$.setCustomValidity(msg);
        inputNode.$.reportValidity();
        return msg ? null : dates;
    }
    function fixInputValue() {
        let caret = inputNode.$.selectionStart;
        const [parsed, dates] = parseInputData(inputNode.$.value);
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
        inputNode.$.selectionStart = caret;
        inputNode.$.selectionEnd = caret;
        return caret;
    }
    function onBlur(callback) {
        if (formatValue(getDate()) !== inputNode.$.value) {
            fixInputValue();
            changeCalendar();
        }
        return callback?.(false);
    }
    function onClick() {
        const caret = inputNode.$.selectionStart;
        if (inputNode.$.selectionEnd - caret !== 2) {
            selectNextGroup(inputNode.$, false, fixInputValue());
        }
        else {
            inputNode.$.selectionStart = caret;
            inputNode.$.selectionEnd = caret; // NOTE: Needed to preserve active selection [@vanguard | Jun 1, 2020]
            inputNode.$.selectionEnd = caret + 2;
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
        const start = inputNode.$.selectionStart;
        if (start) {
            const nextGroupIndex = nextModifyableGroupIndex(start);
            if (start + 1 === nextGroupIndex ||
                start + 3 === nextGroupIndex ||
                nextGroupIndex + 2 === start) {
                selectNextGroup(inputNode.$, true);
                validateInput(inputNode.$.value);
            }
        }
    }
    function selectNextGroup(node, isRightDir = false, caret = node.selectionStart) {
        const left = (isRightDir ? nextModifyableGroupIndex : prevModifyableGroupIndex)(caret);
        node.selectionStart = left;
        node.selectionEnd = left + 2;
        // const isFirstDateFocused = node.selectionStart < 11
        // calendar?.setViewDate(date[isFirstDateFocused ? 0 : 1])
    }
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
    return {
        inputNode,
        formatValue,
        onKeyDown,
        onInput,
        onClick,
        onBlur,
    };
}
