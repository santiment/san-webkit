<script lang="ts">
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import Field from './index.svelte'

  let className = ''
  export { className as class }
  export let title: string
  export let options: any[]
  export let selected = options[0]
  export let onSelect: (option: any) => any
  export let checkIsActive = (selected: any, option: any) => selected === option

  let isOpened = false

  function onOptionSelect(option: any) {
    selected = option
    isOpened = false
    onSelect?.(option)
  }
</script>

<Field {title}>
  <div class="relative {className}">
    <Tooltip on="click" class="$style.tooltip" bind:isOpened>
      <button slot="trigger" type="button" class="btn-2 btn--s row v-center justify fluid">
        <slot />
        <Svg id="arrow-down" w="8" h="5" class="mrg-xl mrg--l" />
      </button>

      <div slot="tooltip" class="column">
        {#each options as option}
          <button
            type="button"
            class="btn-ghost"
            class:active={checkIsActive(selected, option)}
            on:click={() => onOptionSelect(option)}
          >
            <slot name="option" {option} />
          </button>
        {/each}
      </div>
    </Tooltip>
  </div>
</Field>

<style>
  .tooltip {
    padding: 8px;
    width: 100%;
  }

  .active {
    --color: var(--green);
  }
</style>
