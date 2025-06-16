<script lang="ts">
  import type { TNotificationsState } from '../schema.js'
  import type { ChangeEventHandler } from 'svelte/elements'

  import { parseRangeString } from '../../../../../../utils/dates/index.js'
  import { TimeModifiers, type TTimeModifier } from '../../../time.js'
  import Button from '../../../../../core/Button/Button.svelte'
  import Input from '../../../../../core/Input/index.js'
  import Popover from '../../../../../core/Popover/Popover.svelte'
  import Checkbox from '../../../../../core/Checkbox/Checkbox.svelte'
  import { cn } from '../../../../../utils/index.js'
  import { exactObjectKeys } from '../../../../../../utils/object.js'

  import Section from './Section.svelte'

  type TProps = {
    state: { $$: TNotificationsState }
  }

  const { state }: TProps = $props()

  const isRepeating = $derived(state.$$.isRepeating)
  const { amount: cooldownValue, modifier: cooldownModifier } = $derived(
    parseRangeString(state.$$.cooldown),
  )

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const node = e.currentTarget
    let value = parseInt(node.value, 10)

    if (!value || value < 1) value = cooldownValue

    node.value = value.toString()
    setCooldown(value, cooldownModifier)
  }

  function setCooldown(amount: number, modifier: TTimeModifier) {
    state.$$.cooldown = `${amount}${modifier}`
  }

  const getModifierLabel = (modifier: TTimeModifier) => TimeModifiers[modifier].frequencyLabel
</script>

<Section title="Frequency of notifications">
  <div class="flex flex-col gap-3 px-4 py-3.5">
    <div class="flex gap-2">
      <Input
        value={cooldownValue}
        type="number"
        min="0"
        disabled={!isRepeating}
        oninput={onInputChange}
      />

      <Popover>
        {#snippet children({ props })}
          <Button
            {...props}
            variant="border"
            disabled={!isRepeating}
            icon="arrow-down"
            iconSize={8}
            iconOnRight
          >
            {getModifierLabel(cooldownModifier)}
          </Button>
        {/snippet}

        {#snippet content({ close })}
          <section class="flex flex-col">
            {#each exactObjectKeys(TimeModifiers) as modifier}
              <Button
                class={cn(cooldownModifier === modifier && 'text-green')}
                onclick={() => {
                  setCooldown(cooldownValue, modifier)
                  close()
                }}
              >
                {getModifierLabel(modifier)}
              </Button>
            {/each}
          </section>
        {/snippet}
      </Popover>
    </div>

    <label class="flex items-center gap-2">
      <Checkbox isActive={!isRepeating} onCheckedChange={(v) => (state.$$.isRepeating = !v)} />
      Disable after it triggers
    </label>
  </div>
</Section>
