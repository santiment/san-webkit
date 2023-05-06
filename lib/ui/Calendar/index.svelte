<script>import { onMount } from 'svelte';
import AirDatepicker from 'air-datepicker';
import Svg from './../../ui/Svg/svelte';
import { setPosition } from './position';
import 'air-datepicker/air-datepicker.css';
export let date;
export let minDate;
export let maxDate;
export let range = false;
export let onDateSelect;
export let showPresets;
export let calendarNode;
let inputEl;
let isVisible = false;
let selectedDates = range ? [new Date(), new Date()] : [new Date()];
onMount(() => {
  calendarNode = new AirDatepicker(inputEl, {
    minDate,
    maxDate,
    range,
    visible: isVisible,
    selectedDates,
    dateFormat: 'dd.MM.yy',
    multipleDatesSeparator: ' – ',
    position: params => setPosition(params, range),
    prevHtml: '<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.37381 7.82946C5.55577 7.62174 5.53489 7.30585 5.32718 7.12389L1.76109 3.99999L5.32718 0.876095C5.53489 0.694136 5.55577 0.378243 5.37381 0.170528C5.19185 -0.0371876 4.87596 -0.0580673 4.66824 0.123892L0.672817 3.62389C0.564438 3.71883 0.502283 3.85591 0.502283 3.99999C0.502283 4.14408 0.564438 4.28115 0.672817 4.37609L4.66824 7.87609C4.87596 8.05805 5.19185 8.03717 5.37381 7.82946Z" fill="#7A859E"/></svg>',
    nextHtml: '<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.626194 7.82946C0.444235 7.62174 0.465115 7.30585 0.67283 7.12389L4.23892 3.99999L0.67283 0.876095C0.465115 0.694136 0.444235 0.378243 0.626194 0.170528C0.808153 -0.0371876 1.12405 -0.0580673 1.33176 0.123892L5.32719 3.62389C5.43557 3.71883 5.49772 3.85591 5.49772 3.99999C5.49772 4.14408 5.43557 4.28115 5.32719 4.37609L1.33176 7.87609C1.12405 8.05805 0.808153 8.03717 0.626194 7.82946Z" fill="#7A859E"/></svg>',

    onSelect({
      date: selectedDate
    }) {
      date = selectedDate;
      onDateSelect === null || onDateSelect === void 0 ? void 0 : onDateSelect(selectedDate);
    },

    onShow() {
      isVisible = true;
      showPresets = true;
    },

    onHide() {
      isVisible = false;
      showPresets = false;
    }

  });
});</script>

<label
  class="input border row v-center body-3
  {isVisible ? 'visible' : ''}
  {showPresets ? 'presets' : ''}"
>
  <input bind:this={inputEl} id="air-datepicker" class="{range ? 'range' : ''} mrg-m mrg--r" />
  <Svg id="arrow" w="8" h="20" class={isVisible ? 'icon-FDPv5A' : ''} />
</label>

<style >:global(.air-datepicker:has(section)) {
  border-radius: 4px 0 0 4px;
}

:global(.air-datepicker) {
  --adp-font-family: "Proxima Nova", sans-serif;
  --adp-background-color: var(--white);
  --adp-border-color: var(--porcelain);
  --adp-color: var(--black);
  --adp-width: 244px;
  box-shadow: none;
}

:global(.air-datepicker--content) {
  --adp-padding: 10px;
}

:global(.air-datepicker-body--day-names) {
  --adp-day-name-color: var(--waterloo);
  margin: 6px 0;
  font-size: 12px;
}

:global(.air-datepicker-cell) {
  --adp-background-color-selected-other-month-focused: var(--green-light-2);
  --adp-background-color-in-range-focused: var(--green-light-2);
  --adp-background-color-in-range: var(--green-light-2);
  --adp-background-color-selected-other-month: var(--green-light-2);
  --adp-cell-border-color-in-range: var(--green-light-2);
  --adp-cell-background-color-in-range: var(--green-light-2);
  --adp-cell-background-color-in-range-hover: var(--green-light-2);
  --adp-color-current-date: var(--blue);
  --adp-cell-background-color-selected: var(--green-light-2);
  --adp-cell-background-color-selected-hover: var(--green-light-2);
  --adp-cell-background-color-hover: var(--athens);
}

:global(.air-datepicker-cell.-selected-.-current-,
      .air-datepicker-cell.-selected-,
      .-in-range-.air-datepicker-cell.-day-.-other-month-,
      .-selected-.air-datepicker-cell.-day-.-other-month-,
      .air-datepicker-cell.-selected-.-current-,
      .-in-range-.air-datepicker-cell.-year-.-other-decade-) {
  color: var(--green);
}

:global(.air-datepicker-cell.-focus-) {
  color: var(--green);
}

:global(.air-datepicker-cell.-in-range-) {
  color: var(--green);
}

:global(.air-datepicker-cell.-range-from-) {
  border-radius: 4px 0 0 4px;
}

:global(.air-datepicker-cell.-range-to-) {
  border-radius: 0 4px 4px 0;
}

:global(.air-datepicker-nav--title) {
  --adp-background-color-hover: var(--athens);
  --adp-nav-color-secondary: var(--waterloo);
}
:global(.air-datepicker-nav--title):hover {
  --adp-nav-color-secondary: var(--green);
  color: var(--green);
}

:global(.air-datepicker--pointer):after {
  display: none;
}

:global(.air-datepicker-nav) {
  padding: 6px 5px 4px;
}

:global(.air-datepicker-nav--action) {
  --adp-nav-arrow-color: var(--waterloo);
  display: flex;
  align-items: center;
  justify-content: center;
}
:global(.air-datepicker-nav--action):hover {
  background: var(--athens);
  border-radius: 4px;
}

:global(.air-datepicker-nav--action svg) {
  width: 6px;
  height: 9px;
}

:global(.air-datepicker-nav--action path) {
  stroke-width: 1px;
}

input {
  width: 64px;
  cursor: inherit;
  caret-color: transparent;
}
input::-webkit-inner-spin-button, input::-webkit-calendar-picker-indicator {
  display: none;
  -webkit-appearance: none;
}

.range {
  width: 142px;
}

label {
  height: 32px;
  max-width: fit-content;
  padding: 6px 14px;
  cursor: pointer;
}
label:hover {
  --border-hover: var(--green);
  fill: var(--border-hover);
}

.visible {
  --border: var(--green);
  --border-hover: var(--green);
}

:global(.icon-FDPv5A) {
  transform: rotate(180deg);
  fill: var(--green);
}</style>
