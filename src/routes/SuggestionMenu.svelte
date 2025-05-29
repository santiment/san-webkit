<script lang="ts">
  import { applyStyles } from 'drawer-svelte'

  import Popover from '$ui/core/Popover/index.js'
  import { untrack } from 'svelte'

  let { editor } = $props()

  let isOpened = $state(false)
  let sideOffset = $state(8)

  let anchorNode = $state.raw<null | HTMLElement>(null)
  let items = []
  let selectedIndex = $state(0)

  const SUGGESTIONS = [
    [
      'Headings',
      [
        {
          id: 'heading',
          title: 'Heading 1',
          subtext: 'Top-level heading',
          aliases: ['h', 'heading1', 'h1'],
        },
        {
          id: 'heading_2',
          title: 'Heading 2',
          subtext: 'Key section heading',
          aliases: ['h2', 'heading2', 'subheading'],
        },
        {
          id: 'heading_3',
          title: 'Heading 3',
          subtext: 'Subsection and group heading',
          aliases: ['h3', 'heading3', 'subheading'],
        },
      ],
    ],

    [
      'Basic blocks',
      [
        {
          id: 'quote',
          title: 'Quote',
          subtext: 'Quote or excerpt',
          aliases: ['quotation', 'blockquote', 'bq'],
        },
        {
          id: 'numbered_list',
          title: 'Numbered List',
          subtext: 'List with ordered items',
          aliases: ['ol', 'li', 'list', 'numberedlist', 'numbered list'],
        },
        {
          id: 'bullet_list',
          title: 'Bullet List',
          subtext: 'List with unordered items',
          aliases: ['ul', 'li', 'list', 'bulletlist', 'bullet list'],
        },
        {
          id: 'paragraph',
          title: 'Paragraph',
          subtext: 'The body of your document',
          aliases: ['p', 'paragraph'],
        },

        {
          id: 'page_break',
          title: 'Page Break',
          subtext: 'Page separator',
          aliases: ['page', 'break', 'separator'],
        },
      ],
    ],

    [
      'Media',
      [
        {
          id: 'image',
          title: 'Image',
          subtext: 'Resizable image with caption',
          aliases: ['image', 'imageUpload', 'upload', 'img', 'picture', 'media', 'url'],
        },
      ],
    ],
  ] as [string, { id: string; title: string; subtext: string }[]][]

  editor.suggestionMenus.onUpdate('/', (state) => {
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

  $effect(() => {
    if (!isOpened) {
      return
    }

    return untrack(() => {
      const target = editor.domElement

      target.addEventListener('keydown', onKeydownEvent, true)

      return () => {
        target.removeEventListener('keydown', onKeydownEvent, true)
      }
    })
  })

  function onKeydownEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      event.preventDefault()

      if (items.length) {
        selectedIndex = (selectedIndex - 1 + items!.length) % items!.length
      }

      return true
    }

    if (event.key === 'ArrowDown') {
      // debugger;
      event.preventDefault()

      if (items.length) {
        selectedIndex = (selectedIndex + 1) % items.length
      }

      return true
    }

    const isComposing = event.isComposing
    if (event.key === 'Enter' && !isComposing) {
      event.preventDefault()
      event.stopPropagation()

      if (items.length) {
        onSuggestionSelect(items[selectedIndex])
      }

      return true
    }

    return false
  }

  function onSuggestionSelect(item: any) {}
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
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_static_element_interactions -->
  <div
    class="5 flex cursor-pointer gap-2.5 rounded px-3 py-1 hover:bg-athens"
    onclick={console.log}
  >
    <div class="column">
      <h4 class="text-sm font-medium">{suggestion.title}</h4>
      <p class="text-2xs">{suggestion.subtext}</p>
    </div>
  </div>
{/snippet}
