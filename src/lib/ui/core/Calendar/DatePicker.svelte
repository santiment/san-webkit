<script lang="ts">
  import Popover from '$lib/ui/Popover'
  import Button from '$lib/ui/Button'
  import Svg from '$lib/ui/Svg'
  import Calendar from './Calendar.svelte'
  import RangeCalendar from './RangeCalendar.svelte'

  let { date = $bindable() }: { date: [Date, Date] | Date } = $props()

  const label = $derived(
    Array.isArray(date)
      ? `${date[0].toLocaleDateString()} - ${date[1].toLocaleDateString()}`
      : date.toLocaleDateString(),
  )
</script>

<Popover noStyles>
  {#snippet children({ ref })}
    <Button {ref} variant="border">
      <Svg id="calendar" w="16" />
      {label}
    </Button>
  {/snippet}

  {#snippet content()}
    {#if Array.isArray(date)}
      <RangeCalendar bind:date />
    {:else}
      <Calendar bind:date />
    {/if}
  {/snippet}
</Popover>
