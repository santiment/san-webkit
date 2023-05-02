<script lang="ts">
  import AirDatepicker from 'air-datepicker'
  import { portal } from '@/utils/portal'
  import Calendar from './index.svelte'

  const presets = [
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

  export let date: Date | Date[]
  export let minDate: Date
  export let maxDate: Date
  export let onDateSelect: (date: Date | Date[]) => void

  let showPresets = true
  let calendarNode: AirDatepicker<HTMLInputElement>
</script>

<Calendar {minDate} {maxDate} {onDateSelect} range bind:date bind:showPresets bind:calendarNode />
{#if showPresets && calendarNode}
  <section use:portal={calendarNode.$datepicker} class="column">
    {#each presets as { title, presetDate }}
      <button class="btn btn-ghost" on:click={() => calendarNode.selectDate(presetDate)}>
        {title}
      </button>
    {/each}
  </section>
{/if}

<style lang="scss">
  section {
    position: absolute;
    top: -1px;
    right: -151px;
    height: calc(100% + 2px);

    min-width: 150px;
    padding: 8px;
    background: var(--white);
    border: 1px solid var(--porcelain);
    border-left: none;
    border-radius: 0 4px 4px 0;
  }
</style>
