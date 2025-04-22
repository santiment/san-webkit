<script lang="ts">
  import type { TBaseSchema } from '../schema.js'
  import type { TAlertStep } from '../../index.svelte.js'

  import Checkbox from '../../../../../core/Checkbox/index.js'
  import Input from '../../../../../core/Input/Input.svelte'
  import { parseRangeString } from '../../../../../../utils/dates/index.js'
  import Popover from '../../../../../core/Popover/Popover.svelte'
  import Button from '../../../../../core/Button/Button.svelte'
  import { TimeModifiers } from '../../../time.js'

  type TProps = { step: TAlertStep<TBaseSchema> }

  let { step }: TProps = $props()

  const timeModifiers = Object.keys(TimeModifiers) as (keyof typeof TimeModifiers)[]
  const { amount, modifier } = $derived(parseRangeString(step.state.$$.cooldown))
</script>

Telgram: <Checkbox
  isActive={step.state.$$.channel.telegram}
  onCheckedChange={(value) => {
    step.state.$$.channel.telegram = value
  }}
/>

Email: <Checkbox
  isActive={step.state.$$.channel.email}
  onCheckedChange={(value) => {
    step.state.$$.channel.email = value
  }}
/>

Telegram channel: <Input
  defaultValue={step.state.$$.channel.telegram_channel}
  oninput={(e) => {
    step.state.$$.channel.telegram_channel = e.currentTarget.value
  }}
/>

isPublic: <Checkbox
  isActive={step.state.$$.isPublic}
  onCheckedChange={(value) => {
    step.state.$$.isPublic = value
  }}
/>

isRepeating: <Checkbox
  isActive={step.state.$$.isRepeating}
  onCheckedChange={(value) => {
    step.state.$$.isRepeating = value
  }}
/>

Cooldown: <Input
  defaultValue={amount}
  oninput={(e) => {
    step.state.$$.cooldown = `${+e.currentTarget.value}${modifier}`
  }}
/>
<Popover>
  {#snippet children({ props })}
    <Button {...props}>{modifier ?? 'Select'}</Button>
  {/snippet}

  {#snippet content()}
    {#each timeModifiers as key}
      <Button
        onclick={() => {
          step.state.$$.cooldown = `${amount}${key}`
        }}
      >
        {TimeModifiers[key].frequencyLabel}
      </Button>
    {/each}
  {/snippet}
</Popover>
