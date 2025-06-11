<script module lang="ts">
  import Component from './ShareDialog.svelte'

  export const showShareDialog$ = () => dialogs$.new(Component)

  type Social = {
    id: string
    href: (p: { link: string; text: string; title: string }) => string
  }

  const SOCIALS = [
    {
      id: 'twitter',
      href: ({ link, text }) => `https://twitter.com/intent/tweet?title=${text}&url=${link}`,
    },
    {
      id: 'facebook',
      href: ({ link }) => `https://www.facebook.com/sharer/sharer.php?u=${link}`,
    },
    {
      id: 'linked-in',
      href: ({ link, text, title }) =>
        `https://www.linkedin.com/shareArticle?mini=true&title=${title}&summary=${text}&source=santiment.net&url=${link}`,
    },
    {
      id: 'telegram',
      href: ({ link, text }) => `https://telegram.me/share/url?text=${text}&url=${link}`,
    },
    {
      id: 'reddit',
      href: ({ link, text }) => `https://reddit.com/submit?title=${text}&url=${link}`,
    },
  ] satisfies Social[]
</script>

<script lang="ts">
  import { onMount } from 'svelte'

  import Dialog, { dialogs$, type TDialogProps } from '../Dialog/index.js'
  import Button from '../Button/index.js'
  import Switch from '../Switch/index.js'
  import { copy } from '../../../utils/clipboard.js'
  import { cn } from '../../utils/index.js'
  import { trackEvent } from '../../../analytics/index.js'

  type TProps = {
    title?: string
    entity?: string
    data?: { title?: string; text?: string; link?: string }
    isAuthor?: boolean
    isPublic?: boolean
    onPublicityToggle?: VoidFunction
    feature?: string
    source?: string
  } & TDialogProps

  const {
    title = 'Share',
    entity = 'Watchlist',
    data = {},
    isAuthor = false,
    isPublic = false,
    onPublicityToggle = () => {},
    feature,
    source,
    Controller,
  }: TProps = $props()

  const {
    title: shareTitle = 'Sanbase',
    text = 'Hey! Look what I have found at the app.santiment.net!',
    link = window.location.href,
  } = data

  const encodedTitle = encodeURIComponent(shareTitle)
  const encodedText = encodeURIComponent(text)

  let inputNode = $state<HTMLInputElement>()
  let label = $state('Copy link')

  const disabled = $derived(isAuthor && !isPublic)

  function onCopy() {
    label = 'Copied!'
    copy(link, () => (label = 'Copy link'), 1000, inputNode)
  }

  onMount(() => {
    trackEvent('dialog', { action: 'open', type: 'share_dialog', feature, source })

    return () => trackEvent('dialog', { action: 'close', type: 'share_dialog', feature, source })
  })
</script>

<Dialog>
  <header class="flex items-center justify-between border-b border-b-porcelain px-5 py-3">
    <h2 class="text-base">{title}</h2>
    <Button
      icon="close"
      class="size-3 fill-waterloo hover:bg-transparent hover:fill-green"
      iconSize={10}
      onclick={() => Controller.close(true)}
    />
  </header>

  <div class="w-[600px] px-6 py-5 sm:w-auto sm:max-w-[600px]">
    {#if disabled}
      <div class="mb-4 rounded bg-orange-light-1 px-4 py-2.5 font-medium text-orange">
        Your {entity} is private. Please, switch it to "Public" first.
      </div>
    {/if}

    <div
      class={cn(
        'link mb-6 flex h-[42px] items-center overflow-hidden rounded border',
        disabled && 'pointer-events-none bg-athens',
      )}
    >
      <input
        readonly
        value={link}
        class={cn(
          'h-full w-full border-none bg-transparent px-2.5 py-1.5 focus:outline-none',
          disabled ? 'text-mystic' : 'text-waterloo',
        )}
        bind:this={inputNode}
      />
      <Button
        class={cn(
          'h-full min-w-[84px] items-center justify-center',
          'text-nowrap rounded-none border-l border-l-porcelain',
          'px-3 py-2.5 text-center hover:text-green',
          disabled ? 'text-mystic' : 'text-black',
        )}
        variant="plain"
        onclick={onCopy}
        {disabled}
      >
        {label}
      </Button>
    </div>

    <p class="mb-3">Share on social media</p>
    <div class="flex items-center gap-3">
      {#each SOCIALS as { id, href }}
        <Button
          href={href({ link, title: encodedTitle, text: encodedText })}
          class={cn(
            'flex h-10 w-10 items-center justify-center rounded border border-porcelain fill-black hover:bg-transparent hover:fill-green',
            disabled && 'pointer-events-none bg-athens fill-waterloo text-mystic',
          )}
          target="_blank"
          icon={id}
          iconSize={18}
          iconHeight={20}
        ></Button>
      {/each}

      {#if isAuthor}
        <Button as="label" class="ml-auto flex items-center">
          {isPublic ? 'Public' : 'Private'}
          {entity}

          <Switch class="ml-3 cursor-pointer" checked={isPublic} onCheckedChange={onPublicityToggle}
          ></Switch>
        </Button>
      {/if}
    </div>
  </div>
</Dialog>
