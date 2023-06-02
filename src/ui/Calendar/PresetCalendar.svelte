<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Calendar from './Calendar.svelte'

  const PRESETS = [
    {
      title: 'Last day',
      presetDate: [new Date().setDate(new Date().getDate() - 1), new Date()],
    },
    {
      title: 'Last week',
      presetDate: [new Date().setDate(new Date().getDate() - 7), new Date()],
    },
    {
      title: 'Last month',
      presetDate: [new Date().setMonth(new Date().getMonth() - 1), new Date()],
    },
    {
      title: 'Last 3 month',
      presetDate: [new Date().setMonth(new Date().getMonth() - 3), new Date()],
    },
    {
      title: 'Last 6 month',
      presetDate: [new Date().setMonth(new Date().getMonth() - 6), new Date()],
    },
    {
      title: 'Last year',
      presetDate: [new Date().setFullYear(new Date().getFullYear() - 1), new Date()],
    },
    {
      title: 'All time',
      presetDate: [new Date(2009, 0, 1), new Date()],
    },
  ]

  export let date = [new Date(), new Date()]
  export let label = date[0].toLocaleDateString()
  export let maxDate: Date = new Date()
  export let onDateSelect: (date: Date[]) => void
</script>

<Calendar
  {...$$restProps}
  {date}
  {maxDate}
  {onDateSelect}
  range
  let:trigger
  let:isOpened
  let:classes
>
  <slot {trigger} {isOpened} {classes}>
    <button use:trigger class="{classes} btn--s">
      {label}
      <Svg id="calendar" w="16" class="mrg-s mrg--l" />
    </button>
  </slot>

  <section slot="tooltip" class="column" let:calendar>
    {#each PRESETS as { title, presetDate }}
      <button class="btn-ghost" on:click={() => calendar && calendar.selectDate(presetDate)}>
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