<script lang="ts">
  import './styles.css'

  import { Color } from '@tiptap/extension-text-style'
  import { ListItem } from '@tiptap/extension-list'
  import { TextStyle } from '@tiptap/extension-text-style'
  import StarterKit from '@tiptap/starter-kit'
  import { Editor, type ChainedCommands } from '@tiptap/core'
  import { onMount } from 'svelte'
  //import BlockLayout from 'tiptap-block-layout'

  import Button from '$ui/core/Button/index.js'

  import { useEditorCtx } from './ctx/index.js'
  import BubbleMenu from './core/BubbleMenu.svelte'
  import BlockActions from './core/BlockActions.svelte'
  import { BlockNoteEditor } from '@blocknote/core'
  import { renderToHTMLString } from '@tiptap/static-renderer/pm/html-string'

  type TProps = { content: string }
  let { content }: TProps = $props()

  const { editor } = useEditorCtx()

  const blocknote = BlockNoteEditor.create()

  const data = [
    {
      id: 'b6e310cd-438e-414a-bc4f-906cfca95168',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: 'Welcome to this demo!',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '42d35dbe-eadb-4299-95f2-7c5f759e121a',
      type: 'heading',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
        level: 1,
      },
      content: [
        {
          type: 'text',
          text: 'This is a heading block',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '8e6ffe3f-ea5c-4736-b8d6-528e67c56d78',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [
        {
          type: 'text',
          text: 'This is a paragraph block',
          styles: {},
        },
      ],
      children: [],
    },
    {
      id: '45606696-6bf7-4239-adc4-839e829f1c79',
      type: 'paragraph',
      props: {
        textColor: 'default',
        backgroundColor: 'default',
        textAlignment: 'left',
      },
      content: [],
      children: [],
    },
  ]

  console.log(blocknote)
  console.log(blocknote._tiptapEditor.extensionManager.extensions)
  console.log(
    renderToHTMLString({
      extensions: blocknote._tiptapEditor.extensionManager.extensions,
      content: {
        type: 'doc',
        content: data,
      },
    }),
  )

  let element: HTMLElement

  onMount(() => {
    editor.$ = new Editor({
      content,
      element: element,
      extensions: [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle, //.configure({ types: [ListItem.name] }),
        StarterKit,

        //BlockLayout.configure({ dropareaColor: 'var(--droparea-color)' }),
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

  <BlockActions></BlockActions>
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
