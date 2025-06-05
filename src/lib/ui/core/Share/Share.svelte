<script lang="ts">
  import Button from '$ui/core/Button/index.js'
  import { cn } from '$ui/utils/index.js'
  import { copy } from '$lib/utils/clipboard.js'

  import { showShareDialog$ } from './ShareDialog.svelte'

  type TProps = {
    class?: string
    getLink: () => Promise<string>
  }

  const { class: className = '', getLink }: TProps = $props()

  let explanation = $state('Copy link')

  const showShareDialog = showShareDialog$()

  function onShareClick() {
    getLink().then((link) => {
      showShareDialog({ data: { link }, feature: 'chart_layout', source: 'charts' })
    })
  }

  function onCopyLinkClick() {
    explanation = 'Copied!'
    getLink().then((link) => {
      copy(link, () => (explanation = 'Copy link'), 1500)
    })
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
