<script lang="ts">
  import type { TDocMetric } from '../../san-formulas/language/definitions.js'

  import { onMount } from 'svelte'

  import { copy } from '../../../../utils/clipboard.js'
  import Button from '../../../core/Button/Button.svelte'
  import Svg from '../../../core/Svg/Svg.svelte'

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

<section class="flex-1 gap-3 overflow-auto p-4 column">
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

<style>
  .docs :global {
    pre {
        position: relative
    }
    pre {
        white-space: break-spaces
    }
    pre {
        word-break: break-all
    }
    pre {
        border-radius: 0.25rem
    }
    pre {
        --tw-bg-opacity: 1;
        background-color: rgb(var(--c-athens) / var(--tw-bg-opacity))
    }
    pre {
        padding: 0.75rem
    }
    pre {
        --tw-text-opacity: 1;
        color: rgb(var(--c-black) / var(--tw-text-opacity))
    }

    p code {
        border-radius: 0.25rem
    }

    p code {
        --tw-bg-opacity: 1;
        background-color: rgb(var(--c-athens) / var(--tw-bg-opacity))
    }

    p code {
        padding-left: 0.375rem;
        padding-right: 0.375rem
    }

    p code {
        padding-top: 0.125rem;
        padding-bottom: 0.125rem
    }

    p code {
        font-weight: 500
    }

    p code {
        --tw-text-opacity: 1;
        color: rgb(var(--c-fiord) / var(--tw-text-opacity))
    }
  }

  :global {
    .mtk1 {
        --tw-text-opacity: 1 !important;
        color: rgb(var(--c-black) / var(--tw-text-opacity)) !important
    }

    /* Comments */
    .mtk8 {
        --tw-text-opacity: 1 !important;
        color: rgb(var(--c-waterloo) / var(--tw-text-opacity)) !important
    }

    /* Strings */
    .mtk20 {
        --tw-text-opacity: 1 !important;
        color: rgb(var(--c-lima-hover) / var(--tw-text-opacity)) !important
    }

    /* Functions */
    .mtk6 {
        --tw-text-opacity: 1 !important;
        color: rgb(var(--c-purple) / var(--tw-text-opacity)) !important
    }

    /* Numbers */
    .mtk7 {
        --tw-text-opacity: 1 !important;
        color: rgb(var(--c-orange-hover) / var(--tw-text-opacity)) !important
    }
  }
</style>
