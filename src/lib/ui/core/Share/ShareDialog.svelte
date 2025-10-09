<script module lang="ts">
  import Component from './ShareDialog.svelte'

  export const showShareDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { noop } from '@melt-ui/svelte/internal/helpers'

  import Dialog, { dialogs$, type TDialogProps } from '$ui/core/Dialog/index.js'
  import Button from '$ui/core/Button/index.js'
  import Switch from '$ui/core/Switch/index.js'
  import { copy } from '$lib/utils/clipboard.js'
  import { cn } from '$ui/utils/index.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import { SOCIALS } from './socials.js'

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
    isPublic: isPublicProp = false,
    onPublicityToggle = noop,
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

  let isPublic = $state(isPublicProp)

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
      <div class="mb-4 rounded bg-orange-light-1 px-4 py-3 font-medium text-rhino">
        Your {entity} is private. Please, switch it to "Public" first.
      </div>
    {/if}

    <div
      class={cn(
        'link mb-6 flex h-10 items-center overflow-hidden rounded border',
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
        class={cn('h-10 min-w-[84px] text-nowrap rounded-none border-l px-3')}
        onclick={onCopy}
        {disabled}
      >
        {label}
      </Button>
    </div>

    <p class="mb-4">Share on social media</p>
    <div class="flex items-center gap-3">
      {#each SOCIALS as { id, href }}
        <Button
          href={href({ link, title: encodedTitle, text: encodedText })}
          variant="border"
          size="lg"
          {disabled}
          target="_blank"
          icon={id}
        />
      {/each}

      {#if isAuthor}
        <Button as="label" class="ml-auto flex items-center">
          {isPublic ? 'Public' : 'Private'}
          {entity}

          <Switch
            class="ml-3 cursor-pointer"
            icon={{ active: { id: 'eye-filled', w: 10, h: 7 } }}
            checked={isPublic}
            onCheckedChange={() => {
              isPublic = !isPublic
              onPublicityToggle()
            }}
          />
        </Button>
      {/if}
    </div>
  </div>
</Dialog>
