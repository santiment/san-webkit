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

<section class="column flex-1 gap-3 overflow-auto p-4">
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

  <div bind:this={docsElement} class="docs relative column gap-2 text-fiord">
    {@html definition.documentation || ''}

    <Button
      icon="copy"
      explanation={copyLabel}
      class="invisible absolute! top-1.5 right-1.5 bg-athens hover:bg-mystic/50"
      onclick={onCopy}
    ></Button>
  </div>
</section>

<style>/*! tailwindcss v4.3.3 | MIT License | https://tailwindcss.com */
@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}.docs :global pre{background-color:rgb(var(--c-athens) / 1);padding:calc(var(--spacing,.25rem) * 3);word-break:break-all;white-space:break-spaces;color:rgb(var(--c-black) / 1);border-radius:.25rem;position:relative}.docs :global p code{background-color:rgb(var(--c-athens) / 1);padding-inline:calc(var(--spacing,.25rem) * 1.5);padding-block:calc(var(--spacing,.25rem) * .5);--tw-font-weight:var(--font-weight-medium,500);font-weight:var(--font-weight-medium,500);color:rgb(var(--c-fiord) / 1);border-radius:.25rem}:global .mtk1{color:rgb(var(--c-black) / 1)!important}:global .mtk8{color:rgb(var(--c-waterloo) / 1)!important}:global .mtk20{color:rgb(var(--c-lima-hover) / 1)!important}:global .mtk6{color:rgb(var(--c-purple) / 1)!important}:global .mtk7{color:rgb(var(--c-orange-hover) / 1)!important}@property --tw-font-weight{syntax:"*";inherits:false}
</style>
