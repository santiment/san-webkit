<script module lang="ts">
  import Component from './ShareDialog.svelte'

  export const showShareDialog$ = () => dialogs$.new(Component)
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import { noop } from 'rxjs'

  import Dialog, { dialogs$, type TDialogProps } from '../Dialog/index.js'
  import Button from '../Button/index.js'
  import Switch from '../Switch/index.js'
  import { copy } from '../../../utils/clipboard.js'
  import { cn } from '../../utils/index.js'
  import { trackEvent } from '../../../analytics/index.js'
  import { useDeviceCtx } from '../../../ctx/device/index.svelte.js'

  import { MOBILE_SOCIALS, SOCIALS } from './socials.js'
  import Svg from '../Svg/Svg.svelte'

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

  const { device } = useDeviceCtx()

  const {
    title: shareTitle = 'Sanbase',
    text = 'Hey! Look what I have found at the app.santiment.net!',
    link = window.location.href,
  } = data

  const encodedTitle = encodeURIComponent(shareTitle)
  const encodedText = encodeURIComponent(text)

  let inputNode = $state<HTMLInputElement>()
  let copied = $state(false)
  let label = $state('Copy link')
  let isPublic = $state(isPublicProp)

  const { isDesktop } = $derived(device.$)
  const disabled = $derived(isAuthor && !isPublic)

  function onCopy() {
    label = 'Copied!'
    copied = true
    copy(
      link,
      () => {
        label = 'Copy link'
        copied = false
      },
      1000,
      inputNode,
    )
  }

  onMount(() => {
    trackEvent('dialog', { action: 'open', type: 'share_dialog', feature, source })

    return () => trackEvent('dialog', { action: 'close', type: 'share_dialog', feature, source })
  })
</script>

<Dialog class="md:h-auto md:max-h-max">
  <header
    class="flex items-center justify-between border-b border-b-porcelain px-5 py-3 md:bg-athens"
  >
    <h2 class="text-base md:text-fiord">{title}</h2>
    <Button
      icon="close"
      class="size-3 fill-waterloo md:size-4"
      iconSize={isDesktop ? 10 : 12}
      onclick={() => Controller.close(true)}
    />
  </header>

  <div class="w-[600px] px-6 py-5 md:w-full md:px-5 md:py-6 sm:w-auto">
    {#if disabled}
      <div
        class={cn(
          'mb-4 rounded bg-orange-light-1 px-4 py-3 font-medium text-rhino',
          'md:flex md:gap-2 md:fill-orange-hover md:px-3 md:py-2',
        )}
      >
        {#if !isDesktop}
          <Svg id="warning" w="16" h="20" class="py-[3px]" />
        {/if}

        Your {entity} is private. To be able to share, please, switch it to “Public” first
      </div>
    {/if}

    {#if isDesktop}
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
          class={cn('h-10 min-w-[84px] text-nowrap rounded-none border-l border-solid px-3')}
          onclick={onCopy}
          {disabled}
        >
          {label}
        </Button>
      </div>

      <p class="mb-4 md:text-base">Share on social media</p>
    {:else}
      {@render publicSwitch({ class: 'mb-5' })}

      <Button
        variant="border"
        class="mb-5 w-full justify-center gap-3"
        icon={copied ? undefined : 'link'}
        onclick={onCopy}
        {disabled}
      >
        {label}
      </Button>
    {/if}

    {#if isDesktop}
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

        {@render publicSwitch({ class: 'ml-auto' })}
      </div>
    {:else}
      <section class="grid grid-cols-2 gap-3">
        {#each MOBILE_SOCIALS as { id, href, color }}
          <Button
            href={href({ link, title: encodedTitle, text: encodedText })}
            target="_blank"
            variant="plain"
            size="auto"
            class={cn(
              'w-full gap-3 rounded-md bg-athens fill-white px-6 py-3 capitalize',
              disabled && 'text-casper',
            )}
            {disabled}
          >
            <div
              style:--bg={color}
              class={cn(
                'flex size-5 rounded-full bg-[var(--bg)] transition-colors center',
                disabled && 'bg-mystic',
              )}
            >
              <Svg {id} w="12" />
            </div>

            {id}
          </Button>
        {/each}
      </section>
    {/if}
  </div>
</Dialog>

{#snippet publicSwitch({ class: className }: { class?: string } = {})}
  {#if isAuthor}
    <label class={cn('flex items-center md:justify-between md:py-2', className)}>
      <span class="md:text-base">
        {isPublic ? 'Public' : 'Private'}
        {entity}
      </span>

      <Switch
        class="ml-3 cursor-pointer md:m-0"
        icon={{ active: { id: 'eye-filled', w: 10, h: 7 } }}
        checked={isPublic}
        onCheckedChange={() => {
          isPublic = !isPublic
          onPublicityToggle()
        }}
      />
    </label>
  {/if}
{/snippet}
