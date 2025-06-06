<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { copy } from '$lib/utils/clipboard.js'
  import { trackEvent } from '$lib/analytics/index.js'

  import { showShareDialog$ } from './ShareDialog.svelte'

  type TProps = {
    getLink: () => Promise<string>
    class?: string
    source?: string
    feature?: string
  }

  const { class: className = '', getLink, feature, source }: TProps = $props()

  let explanation = $state('Copy link')

  const showShareDialog = showShareDialog$()

  function onShareClick() {
    getLink().then((link) => {
      showShareDialog({ data: { link }, feature, source })
    })
  }

  function onCopyLinkClick() {
    explanation = 'Copied!'

    getLink().then((link) => {
      copy(link, () => (explanation = 'Copy link'), 1500)
    })

    trackEvent('press', { type: 'quick_link_copy', source })
  }
</script>

<div class={cn('flex items-center', className)}>
  <Button onclick={onShareClick} class="rounded-none rounded-l-md px-3.5 py-1.5" variant="fill">
    Share
  </Button>
  <Button
    icon="link"
    variant="fill"
    class="rounded-none rounded-r-md border-l border-l-white py-1.5"
    onclick={onCopyLinkClick}
    {explanation}
  ></Button>
</div>
