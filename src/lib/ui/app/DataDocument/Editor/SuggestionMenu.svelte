<script lang="ts">
  import { applyStyles } from 'drawer-svelte'

  import Popover from '$ui/core/Popover/index.js'

  import { SUGGESTIONS } from './suggestions.js'
  import { useEditorCtx } from '../ctx/index.svelte.js'

  const { editor } = useEditorCtx.get()
  const currentEditor = editor.$!

  let anchorNode = $state.raw<null | HTMLElement>(null)
  let isOpened = $state(false)
  let sideOffset = $state(8)

  let items = [] as typeof SUGGESTIONS
  let selectedIndex = $state(0)

  $effect(() => {
    if (!isOpened) return

    const target = currentEditor.domElement!

    target.addEventListener('keydown', onKeydownEvent, true)
    return () => target.removeEventListener('keydown', onKeydownEvent, true)
  })

  currentEditor.suggestionMenus.onUpdate('/', (state) => {
    if (!anchorNode) return

    const { show, referencePos } = state

    if (show) {
      selectedIndex = 0
      anchorNode.focus()

      const root = anchorNode.parentElement!
      const { top, left } = root.getBoundingClientRect()

      sideOffset = referencePos.height

      applyStyles(anchorNode, {
        left: `${referencePos.x - left}px`,
        top: `${referencePos.y + sideOffset / 2 - top}px`,
      })
    }

    isOpened = show
  })

  function changeIndex(key: 'ArrowUp' | 'ArrowDown') {
    const diff = key === 'ArrowDown' ? 1 : -1
    const value = selectedIndex + diff

    selectedIndex = value < 0 ? items.length - 1 : value % items.length
  }

  function onKeydownEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
        event.preventDefault()
        changeIndex(event.key)
        return true

      case 'Enter':
        if (!event.isComposing) {
          event.preventDefault()
          event.stopPropagation()

          if (items.length) {
            onSuggestionSelect(items[selectedIndex])
          }

          return true
        }

      // eslint-disable-next-line no-fallthrough
      default:
        return false
    }
  }

  function onSuggestionSelect(item: (typeof items)[number]) {
    console.log(item)
  }
</script>

<div bind:this={anchorNode} class="invisible absolute"></div>

<Popover
  {isOpened}
  contentProps={{ customAnchor: anchorNode, sideOffset }}
  side="bottom"
  align="start"
  class="max-h-[calc(var(--bits-popover-content-available-height)_-_16px)] min-w-[170px] overflow-auto p-0.5 text-rhino column"
>
  {#snippet content()}
    {#each SUGGESTIONS as suggestions}
      {@render group(suggestions[0])}

      {#each suggestions[1] as suggestion}
        {@render item(suggestion)}
      {/each}
    {/each}
  {/snippet}
</Popover>

{#snippet group(title: string)}
  <h3 class="px-3 py-1 text-xs font-medium">{title}</h3>
{/snippet}

{#snippet item(suggestion: { title: string; subtext: string })}
  <button
    class="5 flex cursor-pointer gap-2.5 rounded px-3 py-1 hover:bg-athens"
    onclick={console.log}
  >
    <div class="column">
      <h4 class="text-sm font-medium">{suggestion.title}</h4>
      <p class="text-2xs">{suggestion.subtext}</p>
    </div>
  </button>
{/snippet}
