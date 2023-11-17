<script context="module"></script>

<script>import Svg from './../../ui/Svg/svelte';
import { setDayStart, getTodaysEnd } from './../../utils/dates';
import Calendar from './Calendar.svelte';
function Preset(title, target, diff) {
    const from = setDayStart(new Date());
    from[`set${target}`](from[`get${target}`]() - diff);
    return {
        title,
        presetDate: [from, getTodaysEnd()],
    };
}
const PRESETS = [
    Preset('Last day', 'Date', 1),
    Preset('Last week', 'Date', 7),
    Preset('Last month', 'Month', 1),
    Preset('Last 3 months', 'Month', 3),
    Preset('Last 6 months', 'Month', 6),
    Preset('Last year', 'FullYear', 1),
    {
        title: 'All time',
        presetDate: [new Date(2009, 0, 5), new Date()],
    },
];
export let date = [new Date(), new Date()];
export let label = date[0].toLocaleDateString();
export let maxDate = new Date();
export let onDateSelect;
export let calendar = null;
function onPresetClick(dates) {
    if (calendar) {
        calendar.clear();
        calendar.selectDate(dates);
        calendar.setViewDate(dates[0]);
    }
}
</script>

<Calendar
  {...$$restProps}
  {date}
  {maxDate}
  {onDateSelect}
  range
  bind:calendar
  let:trigger
  let:isOpened
  let:classes
>
  <slot {trigger} {isOpened} {classes}>
    <button use:trigger class="{classes} btn--s">
      <Svg id="calendar" w="16" class="mrg-s mrg--r" />

      {label}
    </button>
  </slot>

  <section slot="tooltip" class="column">
    {#each PRESETS as { title, presetDate }}
      <button class="btn-ghost" on:click={() => onPresetClick(presetDate)}>
        {title}
      </button>
    {/each}
  </section>
</Calendar>

<style>
  section {
    min-width: 150px;
    padding: 8px;
    border-left: 1px solid var(--porcelain);
  }
</style>
