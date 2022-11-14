<script lang="ts">
  import type { CreationType } from '@/ui/Profile/types'
  import type { Votes } from '@/ui/LikeButton/index.svelte'

  import Profile from '@/ui/Profile/svelte'
  import ProfilePic from '@/ui/Profile/Pic.svelte'
  import Info from '@/ui/Profile/Info.svelte'
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import CommentsButton from '@/ui/Comments/Button.svelte'
  import VoteButton from './VoteButton.svelte'
  import HoverEdit from './HoverEdit.svelte'

  export let id: number
  export let title: string
  export let user: SAN.Author
  export let currentUser: SAN.CurrentUser | null
  export let onEditClick: () => any
  export let type: CreationType
  export let fallback = 'Unsaved layout'
  export let editLabel = 'Edit'
  export let comments: {
    count: number
    active?: boolean
    onClick: () => any
  }
  export let votes: Votes
  export let onVote
  export let titleHoverTooltipClass = ''
  export let hasInfo = true
  export let source: string
</script>

{#if title}
  <div class="creation row v-center mrg-m mrg--r">
    <Tooltip openDelay={110}>
      <svelte:fragment slot="trigger">
        <Profile {user} class="$style.author" />
      </svelte:fragment>

      <svelte:fragment slot="tooltip">
        <Info {user} {type} {currentUser} />
      </svelte:fragment>
    </Tooltip>

    <div class="divider" />

    <HoverEdit
      class="$style.title body-2"
      {currentUser}
      {editLabel}
      {onEditClick}
      {titleHoverTooltipClass}>{title}</HoverEdit
    >

    {#if $$slots.info && hasInfo}
      <Tooltip openDelay={110} offsetX={-50} offsetY={8}>
        <div slot="trigger" class="btn info row v-center">
          <Svg id="info" w="16" />
        </div>
        <div slot="tooltip" class="tooltip">
          <slot name="info" />
        </div>
      </Tooltip>
    {/if}
  </div>

  <CommentsButton {...comments} on:click={comments.onClick} class="mrg-s mrg--r" />
  <VoteButton
    {id}
    {type}
    {votes}
    {source}
    {onVote}
    disabled={!currentUser}
    class="mrg-xxl mrg--r"
  />
{:else}
  <ProfilePic class="mrg-m mrg--r" />

  <HoverEdit
    class="$style.title body-2"
    {currentUser}
    editLabel="Save as"
    {onEditClick}
    {titleHoverTooltipClass}
  >
    {fallback}
  </HoverEdit>
{/if}

<style lang="scss">
  .creation {
    overflow: hidden;
  }

  .info {
    padding: 8px;
    --fill: var(--waterloo);
    --fill-hover: var(--black);
    --bg-hover: var(--athens);
  }

  .tooltip {
    padding: 24px;
    width: 484px;
  }

  .divider {
    height: 32px;
    width: 1px;
    background: var(--mystic);
    margin: 0 12px;
  }

  .author {
    overflow: hidden;
    min-width: fit-content;

    :global(span) {
      max-width: 140px !important;
    }
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
