<script lang="ts">
  import { useClockCtx } from '../../../ctx/time/index.js'
  import Select, { type Selected } from '../../core/Select/index.js'
  import { TimeZones } from '../../../utils/dates/index.js'
  import { useUiCtx } from '../../../ctx/ui/index.svelte.js'
  import { cn } from '../../utils/index.js'
  import { trackEvent } from '../../../analytics/index.js'

  type TProps = { class?: string }
  let { class: className }: TProps = $props()

  const { ui } = useUiCtx.get()
  const { time } = useClockCtx.get()

  const items = Object.values(TimeZones).map((item) => ({
    value: item!.name,
    label: `(${item!.utcLabel}) ${item!.cities}`,
    data: item!,
  }))

  function onSelect(item: undefined | Selected<string>) {
    const timeZone = item?.value || 'UTC'
    ui.$$.timeZone = timeZone

    trackEvent('select', {
      value: timeZone,
      type: 'timezone',
      source: 'chart_bottom_date_controls',
    })
  }
</script>

<Select
  items={[{ value: 'UTC', label: 'UTC' }].concat(items)}
  dropdown={false}
  variant="ghost"
  explanation="Time zone selector"
  triggerClass={cn('min-w-[108px] text-waterloo', className)}
  side="top"
  align="end"
  style="--expl-align-x:50%;--expl-right:50%"
  {onSelect}
>
  {time.$}

  {#snippet option(option)}
    {option.label}
  {/snippet}
</Select>
