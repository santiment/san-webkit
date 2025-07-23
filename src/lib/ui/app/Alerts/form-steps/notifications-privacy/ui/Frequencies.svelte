<script lang="ts">
  import type { TNotificationsState } from '../schema.js'
  import type { ChangeEventHandler } from 'svelte/elements'

  import { parseRangeString } from '$lib/utils/dates/index.js'
  import { TimeModifiers, type TTimeModifier } from '$ui/app/Alerts/time.js'
  import Button from '$ui/core/Button/Button.svelte'
  import Input from '$ui/core/Input/index.js'
  import Popover from '$ui/core/Popover/Popover.svelte'
  import { cn } from '$ui/utils/index.js'
  import { exactObjectKeys } from '$lib/utils/object.js'

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

  const getModifierLabel = (modifier: TTimeModifier) => TimeModifiers[modifier].label

  const getRepeatingLabel = (isRepeating: boolean) => (isRepeating ? 'Once every' : 'Once')
</script>

<Section title="Frequency of notifications">
  <div class="flex gap-2 px-4 py-3.5">
    <Popover>
      {#snippet children({ props })}
        <Button {...props} variant="border" icon="arrow-down" iconSize={8} iconOnRight>
          {getRepeatingLabel(isRepeating)}
        </Button>
      {/snippet}

      {#snippet content({ close })}
        <section class="flex flex-col">
          {#each [false, true] as optionValue}
            <Button
              class={cn(isRepeating === optionValue && 'text-green')}
              onclick={() => {
                state.$$.isRepeating = optionValue
                close()
              }}
            >
              {getRepeatingLabel(optionValue)}
            </Button>
          {/each}
        </section>
      {/snippet}
    </Popover>

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
</Section>
