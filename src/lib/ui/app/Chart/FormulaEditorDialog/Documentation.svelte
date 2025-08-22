<script lang="ts">
  import type { TDocMetric } from '$ui/app/san-formulas/language/definitions.js'

  import { onMount } from 'svelte'

  import { copy } from '$lib/utils/clipboard.js'
  import Button from '$ui/core/Button/Button.svelte'
  import Svg from '$ui/core/Svg/Svg.svelte'

  type TProps = {
    definition: { icon?: string; label: string; documentation: string; metric?: TDocMetric }
  }
  const { definition }: TProps = $props()

  let copyLabel = $state('Copy')

  let docsElement: HTMLElement
  let currentPreElement: null | undefined | HTMLElement = null

  function onCopy() {
    copyLabel = 'Copied!'
    copy(currentPreElement?.innerText.trim() || '', () => (copyLabel = 'Copy'), 1000)
  }

  onMount(() => {
    const copyButtonElement = docsElement.lastElementChild as HTMLButtonElement

    function onMouseOver(e: MouseEvent) {
      const preElement = (e.target as null | HTMLElement)?.closest('pre')

      if (preElement === currentPreElement) {
        return
      }

      currentPreElement = preElement

      if (!preElement) {
        return copyButtonElement.classList.add('invisible')
      }

      preElement.appendChild(copyButtonElement)
      copyButtonElement.classList.remove('invisible')
    }

    docsElement.addEventListener('mouseover', onMouseOver)
    return () => docsElement.removeEventListener('mouseover', onMouseOver)
  })
</script>

<section class="gap-3 overflow-auto p-4 column">
  <h2 class="flex items-center gap-2 fill-waterloo text-base font-medium text-rhino">
    {#if definition.metric}
      <span class="rounded-md bg-athens px-2.5 text-fiord">
        {definition.label}
      </span>
      {definition.metric.fullLabel}
    {:else}
      <Svg id={definition.icon!}></Svg>
      {definition.label}
    {/if}
  </h2>

  <div bind:this={docsElement} class="docs relative gap-2 text-fiord column">
    {@html definition.documentation || ''}

    <Button
      icon="copy"
      explanation={copyLabel}
      class="invisible !absolute right-1.5 top-1.5 bg-athens hover:bg-mystic/50"
      onclick={onCopy}
    ></Button>
  </div>
</section>

<style lang="postcss">
  .docs :global {
    pre {
      @apply relative whitespace-pre-wrap rounded bg-athens p-3 text-black;
    }

    p code {
      @apply rounded bg-athens px-1.5 py-0.5 font-medium text-fiord;
    }
  }

  :global {
    .mtk1 {
      @apply !text-black;
    }

    /* Comments */
    .mtk8 {
      @apply !text-waterloo;
    }

    /* Strings */
    .mtk20 {
      @apply !text-lima-hover;
    }

    /* Functions */
    .mtk6 {
      @apply !text-purple;
    }

    /* Numbers */
    .mtk7 {
      @apply !text-orange-hover;
    }
  }
</style>
