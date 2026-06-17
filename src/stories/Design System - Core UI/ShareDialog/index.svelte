<script lang="ts">
  import ShareDialog, { showShareDialog$ } from '$ui/core/Share/ShareDialog.svelte'
  import StoryDialog from '../Dialog/StoryDialog.svelte'

  type TProps = {
    withPublicToggle?: boolean
  }

  const { withPublicToggle = false }: TProps = $props()

  const showShareDialog = showShareDialog$()

  let isPublic = $state(false)

  const dialogProps = $derived({
    data: {
      link: 'https://app.santiment.net/s/YBVJyqVw',
      title: 'Some watchlist',
    },
    title: 'Share watchlist',

    entity: 'watchlist',
    feature: 'watchlist',
    source: 'storybook',

    isAuthor: withPublicToggle,
    isPublic: withPublicToggle && isPublic,

    onPublicityToggle: () => {
      setTimeout(() => {
        isPublic = !isPublic
      }, 500)
    },
  })
</script>

<div class="flex flex-col justify-center divide-y p-6">
  <div class="flex gap-4">
    <button onclick={() => showShareDialog(dialogProps)}>Open</button>
  </div>
</div>

<StoryDialog render={ShareDialog} {...dialogProps} />
