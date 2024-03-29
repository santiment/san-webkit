<script context="module" lang="ts">
  import { dialogs } from '@/ui/Dialog'
  import ShareDialog from './Dialog.svelte'

  export enum SHARE_TYPE {
    Watchlist = 'watchlist',
    Alert = 'alert',
    Chart = 'chart',
  }

  const SECRET_LINK_TAG = '__SECRET_LINK_TAG__'
  const SECRET_TEXT_TAG = '__SECRET_TEXT_TAG__'

  export const MEDIA_LINKS = [
    {
      link: `https://twitter.com/home?status=${SECRET_TEXT_TAG}%0Alink%3A%20${SECRET_LINK_TAG}`,
      title: 'Twitter',
      background: '#56A8DC',
    },
    {
      link: 'https://santiment.net/discord',
      title: 'Discord',
      background: '#5B65EA',
    },
    {
      link: `https://reddit.com/submit?title=${SECRET_TEXT_TAG}&url=${SECRET_LINK_TAG}`,
      title: 'Reddit',
      background: '#EB5528',
    },
    {
      link: `https://telegram.me/share/url?text=${SECRET_TEXT_TAG}&url=${SECRET_LINK_TAG}`,
      title: 'Telegram',
      background: '#5AAADB',
    },
  ]

  export const showShareDialog = (props) =>
    dialogs.show(ShareDialog, Object.assign({ strict: true }, props))
</script>

<script lang="ts">
  import { onMount } from 'svelte'
  import Svg from '@/ui/Svg/svelte'
  import ToggleVisibility from '@/ui/ToggleVisibility.svelte'
  import Dialog from '@/ui/Dialog'
  import { copy, noop } from '@/utils'
  import { trackShareFormOpen } from '@/analytics/events/interaction'

  export let shareType
  export let shareLink
  export let shareText
  export let onChangePrivacy = noop
  export let feature: any
  export let source: any

  let copyLabel = 'Copy'
  let isPublic = false

  const encodedText = encodeURIComponent(shareText)
  const encodedLink = encodeURIComponent(shareLink)

  $: disabled = shareType && !isPublic

  function onCopy() {
    copyLabel = 'Copied!'
    copy(shareLink, () => (copyLabel = 'Copy'), 1500)
  }

  onMount(() => {
    trackShareFormOpen({ feature, source })
  })
</script>

<Dialog {...$$props} title="Share" titleClassName="$style.title body-2 txt-m">
  <section class="body-2">
    {#if shareType}
      <div class="privacy">
        {#if !isPublic}
          <div class="row info body-3 mrg-m mrg--b">
            <Svg id="warning" w="16" h="14" class="$style.info-icon mrg-s mrg--r" />
            Your watchlist is private. To able to share, please, switch it to “Public” first
          </div>
        {/if}
        <div class="action row v-center justify">
          {isPublic ? 'Public' : 'Private'}
          {shareType}
          <ToggleVisibility isActive={isPublic} handleClick={onChangePrivacy} />
        </div>
      </div>
    {/if}
    <button
      class="copy btn row hv-center fluid expl-tooltip"
      aria-label={copyLabel}
      on:click|preventDefault={onCopy}
    >
      <Svg id="link" w="16" class="$style.copy-icon mrg-m mrg--r" />

      Copy link
    </button>
    <div class="links">
      {#each MEDIA_LINKS as { title, link, background }}
        {@const href = link
          .replace(SECRET_LINK_TAG, encodedLink)
          .replace(SECRET_TEXT_TAG, encodedText)}
        <a
          class="media-link btn row v-center"
          {href}
          class:disabled
          on:click|preventDefault={window.__onLinkClick}
        >
          <div
            class="media row hv-center mrg-m mrg--r"
            style="background: {disabled ? 'var(--mystic)' : background}"
          >
            <Svg id={title.toLowerCase()} w="13" h="10" class="$style.media-icon" />
          </div>
          {title}
        </a>
      {/each}
    </div>
  </section>
</Dialog>

<style lang="scss">
  .title {
    padding: 12px 30px 12px 20px;
    color: var(--fiord);
    background: var(--whale);
    border-radius: 15px 15px 0 0;
  }

  section {
    padding: 24px 20px 20px;
  }

  button,
  a {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    &:focus,
    &:visited,
    &:active {
      outline: none;
    }
  }

  .privacy {
    margin-bottom: 20px;
  }

  .info {
    background: var(--orange-pale);
    padding: 8px 12px;
    border-radius: 6px;
  }

  .info-icon {
    fill: var(--orange-hover);
    margin-top: 4px;
  }

  .action {
    height: 40px;
  }

  .copy {
    height: 48px;
    padding: 16px 0;
    border: 1px solid var(--porcelain);
    border-radius: 6px;
    margin-bottom: 20px;
  }

  .disabled {
    .copy-icon {
      fill: var(--porcelain);
    }
  }

  .copy-icon {
    fill: var(--waterloo);
  }

  .links {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 12px;
  }

  .media-link {
    height: 48px;
    padding: 12px 24px;
    background: var(--athens);
    border-radius: 6px;
  }

  .media {
    height: 20px;
    width: 20px;
    border-radius: 100%;
  }

  .media-icon {
    fill: var(--white);
  }
</style>
