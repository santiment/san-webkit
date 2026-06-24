<script lang="ts">
  import Popover from '$ui/core/Popover/index.js'
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'

  import { fromDate } from '@internationalized/date'

  import Calendar from './Calendar.svelte'

  type TProps = { as: any }
  let {
    as,
    buttonClass,
    rootClass,

    popoverIsOpened = $bindable(false),
    withTrigger = true,

    ...rest
  }: TProps = $props()

  const range = [
    fromDate(new Date('2026-05-31'), 'utc'),
    fromDate(new Date('2026-06-19'), 'utc'),
  ] as const
</script>

<Popover
  noStyles
  class={cn('z-10 shadow-dropdown dark:shadow-none', rootClass)}
  rootProps={rest.popoverRootProps}
  bind:isOpened={popoverIsOpened}
  contentProps={rest.popoverContentProps}
  children={withTrigger ? triggerSnippet : undefined}
>
  {#snippet content()}
    <div class="flex divide-x">
      <Calendar {range} targetCursor={0}></Calendar>
      <Calendar {range} targetCursor={1}></Calendar>
    </div>
  {/snippet}
</Popover>

{#snippet triggerSnippet({ props }: { props: Record<string, any> })}
  <Button
    {...props}
    {as}
    variant="border"
    icon="calendar"
    class={cn('whitespace-nowrap', buttonClass)}
  >
    123
  </Button>
{/snippet}

<style>
  :global(.calendar-restrict-after ~ span),
  :global(span:has(~ .calendar-restrict-before)) {
    cursor: not-allowed;
    color: var(--mystic);
    background: none !important;
  }
</style>
