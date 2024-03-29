<script lang="ts">
  import AirDatepicker from 'air-datepicker/air-datepicker'
  import 'air-datepicker/air-datepicker.css'
  import localeEn from 'air-datepicker/locale/en'
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip'

  type T = $$Generic<boolean>
  type K = T extends true ? Date[] : Date

  let className = ''
  export { className as class }
  export let range = false as T
  export let date = (range ? [new Date(), new Date()] : new Date()) as K
  export let label = (date[0] || date).toLocaleDateString()
  export let maxDate = new Date()
  export let minDate = undefined as undefined | Date
  export let onDateSelect: (date: any) => void
  export let calendar: null | AirDatepicker<any> = null
  export let startDate = undefined as undefined | Date

  let tooltip = null

  $: if (tooltip) {
    mount(tooltip)
  } else {
    destroy()
  }

  function destroy() {
    calendar?.destroy()
    calendar = null
  }

  function onTriggerClick(e: MouseEvent) {
    if (!range) return

    const node = e.currentTarget as null | HTMLElement
    if (!node) return

    const x = (e.clientX - node.getBoundingClientRect().left) / node.clientWidth
    const index = x < 0.45 ? 0 : 1
    startDate = date[index]
  }

  function mount(parent: HTMLElement) {
    if (calendar) return

    calendar = new AirDatepicker(parent, {
      minDate,
      maxDate,
      range,
      startDate,
      visible: true,

      selectedDates: range ? date : [date],
      dateFormat: 'dd.MM.yy',
      multipleDatesSeparator: ' – ',
      locale: localeEn,
      prevHtml:
        '<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.37381 7.82946C5.55577 7.62174 5.53489 7.30585 5.32718 7.12389L1.76109 3.99999L5.32718 0.876095C5.53489 0.694136 5.55577 0.378243 5.37381 0.170528C5.19185 -0.0371876 4.87596 -0.0580673 4.66824 0.123892L0.672817 3.62389C0.564438 3.71883 0.502283 3.85591 0.502283 3.99999C0.502283 4.14408 0.564438 4.28115 0.672817 4.37609L4.66824 7.87609C4.87596 8.05805 5.19185 8.03717 5.37381 7.82946Z" fill="#7A859E"/></svg>',
      nextHtml:
        '<svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.626194 7.82946C0.444235 7.62174 0.465115 7.30585 0.67283 7.12389L4.23892 3.99999L0.67283 0.876095C0.465115 0.694136 0.444235 0.378243 0.626194 0.170528C0.808153 -0.0371876 1.12405 -0.0580673 1.33176 0.123892L5.32719 3.62389C5.43557 3.71883 5.49772 3.85591 5.49772 3.99999C5.49772 4.14408 5.43557 4.28115 5.32719 4.37609L1.33176 7.87609C1.12405 8.05805 0.808153 8.03717 0.626194 7.82946Z" fill="#7A859E"/></svg>',

      onSelect(data) {
        if (range) {
          if (+data.date[0] !== +date[0] || +data.date[1] !== +date[1]) {
            onDateSelect?.(data.date as K)
          }
        } else {
          onDateSelect?.(data.date as K)
        }
      },
    })

    if (range) calendar.setViewDate(startDate || date[0])
  }
</script>

<Tooltip
  position="bottom"
  {...$$restProps}
  on="click"
  clickaway
  bind:tooltip
  let:trigger
  style="flex-direction: row-reverse;"
  {onTriggerClick}
>
  {@const classes = `btn-2 row v-center $style.trigger ${
    tooltip ? '$style.active' : ''
  } ${className}`}

  <slot {trigger} isOpened={!!tooltip} {classes}>
    <button use:trigger class="{classes} btn--s">
      <Svg id="calendar" w="16" class="mrg-s mrg--r" />

      {label}
    </button>
  </slot>

  <slot name="tooltip" slot="tooltip" {calendar} />
</Tooltip>

<style lang="scss">
  .trigger {
    color: var(--black) !important;
    --fill: var(--waterloo);
    --bg: var(--white);
    --border-hover: var(--green);
    --fill-hover: var(--green);
  }

  .active {
    --border: var(--green);
    --fill: var(--green);
  }

  :global {
    .air-datepicker:has(section) {
      border-radius: 4px 0 0 4px;
    }

    // DP
    .air-datepicker {
      --adp-font-family: 'Proxima Nova', sans-serif;
      --adp-background-color: var(--white);
      --adp-border-color: var(--porcelain);
      --adp-color: var(--black);
      --adp-width: 244px;
      box-shadow: none;
      border: none;
    }

    // DP content
    .air-datepicker--content {
      --adp-padding: 10px;
    }

    // DP days
    .air-datepicker-body--day-names {
      --adp-day-name-color: var(--waterloo);
      margin: 6px 0;
      font-size: 12px;
    }

    // DP date cell
    .air-datepicker-cell {
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

    // DP date cell active
    .air-datepicker-cell.-selected-.-current-,
    .air-datepicker-cell.-selected-,
    .-in-range-.air-datepicker-cell.-day-.-other-month-,
    .-selected-.air-datepicker-cell.-day-.-other-month-,
    .air-datepicker-cell.-selected-.-current-,
    .-in-range-.air-datepicker-cell.-year-.-other-decade- {
      color: var(--green);
    }

    // DP date cell in focus
    .air-datepicker-cell.-focus- {
      color: var(--green);
    }

    // DP date cell in range
    .air-datepicker-cell.-in-range- {
      color: var(--green);
    }

    // DP date cell in range
    .air-datepicker-cell.-range-from- {
      border-radius: 4px 0 0 4px;
    }

    // DP date cell in range
    .air-datepicker-cell.-range-to- {
      border-radius: 0 4px 4px 0;
    }

    // DP title
    .air-datepicker-nav--title {
      --adp-background-color-hover: var(--athens);
      --adp-nav-color-secondary: var(--waterloo);

      &:hover {
        --adp-nav-color-secondary: var(--green);
        color: var(--green);
      }
    }

    // DP Arrow pointer
    .air-datepicker--pointer:after {
      display: none;
    }

    // DP header
    .air-datepicker-nav {
      padding: 6px 5px 4px;
    }

    // DP nav action
    .air-datepicker-nav--action {
      --adp-nav-arrow-color: var(--waterloo);
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: var(--athens);
        border-radius: 4px;
      }
    }

    // DP nav action arrow
    .air-datepicker-nav--action svg {
      width: 6px;
      height: 9px;
    }

    // DP nav action path
    .air-datepicker-nav--action path {
      stroke-width: 1px;
    }
  }
</style>
