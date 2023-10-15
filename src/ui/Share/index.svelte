<script context="module" lang="ts">
  import type { ComponentProps } from 'svelte'

  import { dialogs } from '../Dialog'
  import ShareDialog from './index.svelte'

  export const showShareDialog = (props: ComponentProps<ShareDialog>) =>
    dialogs.showOnce(ShareDialog, props)

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
  import { copy } from '@/utils'
  import { trackShareFormOpen } from '@/analytics/events/interaction'
  import Dialog from '../Dialog'
  import Svg from '../Svg/svelte'
  import Toggle from '../Toggle.svelte'

  export let title = 'Share'
  export let entity = 'Watchlist'
  export let data: { title?: string; text?: string; link?: string } = {}
  export let isAuthor = false
  export let isPublic = false
  export let onPublicityToggle = () => {}
  export let feature: any
  export let source: any

  const {
    title: shareTitle = 'Sanbase',
    text = 'Hey! Look what I have found at the app.santiment.net!',
    link = window.location.href,
  } = data
  const encodedTitle = encodeURIComponent(shareTitle)
  const encodedText = encodeURIComponent(text)

  let closeDialog: () => void
  let inputNode: HTMLInputElement
  let label = 'Copy link'

  $: disabled = isAuthor && !isPublic

  function onCopy() {
    label = 'Copied!'
    copy(link, () => (label = 'Copy link'), 1000, inputNode)
  }

  onMount(() => {
    trackShareFormOpen({ feature, source })
  })
</script>

<Dialog bind:closeDialog {...$$props} {title}>
  <div class="dialog">
    {#if disabled}
      <div class="note c-orange txt-m mrg-l mrg--b">
        Your {entity} is private. Please, switch it to "Public" first.
      </div>
    {/if}

    <div class="link border mrg-xl mrg--b row" class:disabled>
      <input readonly value={link} class="fluid c-waterloo" bind:this={inputNode} />
      <button class="copy btn nowrap txt-center" on:click={onCopy}>{label}</button>
    </div>

    Share on social media
    <div class="bottom row mrg-l mrg--t">
      {#each SOCIALS as { id, href }}
        <a
          href={href({ link, title: encodedTitle, text: encodedText })}
          class="social btn-3 btn-2"
          class:disabled
          target="_blank"
          rel="noopener noreferrer"
        >
          <Svg {id} w="18" h="20" />
        </a>
      {/each}

      {#if isAuthor}
        <button class="btn mrg-a mrg--l row v-center" on:click={onPublicityToggle}>
          {isPublic ? 'Public' : 'Private'}
          {entity}
          <Toggle isActive={isPublic} class="mrg-m mrg--l" />
        </button>
      {/if}
    </div>
  </div>
</Dialog>

<style lang="scss">
  .dialog {
    width: 600px;
    padding: 20px 24px;
  }
  input {
    padding: 6px 10px;
    background: transparent;
    color: var(--waterloo);
  }
  .copy {
    padding: 10px 12px;
    border-left: 1px solid var(--porcelain);
    --color-hover: var(--green);
    border-radius: 0;
    min-width: 84px;
  }
  .link.disabled {
    background: var(--athens);
    color: var(--mystic);
    --waterloo: var(--mystic);
  }
  .social {
    width: 40px;
    height: 40px;
  }
  .bottom {
    gap: 12px;
  }
  .note {
    background: var(--orange-light-1);
    padding: 10px 16px;
  }

  @include dac(phone, phone-xs) {
    .dialog {
      width: auto;
      max-width: 600px;
    }
  }
</style>
