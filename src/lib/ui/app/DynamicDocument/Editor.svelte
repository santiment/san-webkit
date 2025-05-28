<script lang="ts">
  import './styles.css'

  import { Color } from '@tiptap/extension-text-style'
  import { ListItem } from '@tiptap/extension-list'
  import { TextStyle } from '@tiptap/extension-text-style'
  import StarterKit from '@tiptap/starter-kit'
  import { Editor, type ChainedCommands } from '@tiptap/core'
  import { onMount } from 'svelte'

  import Button from '$ui/core/Button/index.js'

  import { useEditorCtx } from './ctx/index.js'
  import BubbleMenu from './core/BubbleMenu.svelte'

  type TProps = { content: string }
  let { content }: TProps = $props()

  const { editor } = useEditorCtx()

  let element: HTMLElement

  onMount(() => {
    editor.$ = new Editor({
      content,
      element: element,
      extensions: [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle, //.configure({ types: [ListItem.name] }),
        StarterKit,
      ],
      //onTransaction: () => {
      // force re-render so `editor.isActive` works as expected
      //editor = editor
      //},
    })
  })
</script>

<div bind:this={element}></div>

{#if editor.$}
  {#snippet action(icon: string, onclick: (editor: ChainedCommands) => void)}
    <Button {icon} iconSize="12" size="sm" onclick={() => onclick(editor.$!.chain().focus())}
    ></Button>
  {/snippet}

  <BubbleMenu class="z-50 flex items-center rounded bg-white p-1 px-2 shadow">
    <Button icon="editor/link" iconSize="12" size="sm"></Button>

    {@render action('editor/bold', (editor) => editor.toggleBold().run())}
    {@render action('editor/italic', (editor) => editor.toggleBold().run())}
    {@render action('editor/underline', (editor) => editor.toggleBold().run())}
  </BubbleMenu>

  <!--
      <button
        onclick={() => editor.$.chain().focus().toggleBold().run()}
        disabled={!editor.$.can().chain().focus().toggleBold().run()}
        class={editor.$.isActive('bold') ? 'is-active' : ''}
      >
        Bold
      </button>
  -->
{/if}
