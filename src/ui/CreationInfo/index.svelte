<script lang="ts">
  import type { CreationType } from '@/ui/Profile/types'
  import type { Votes } from '@/ui/LikeButton/index.svelte'

  import Profile from '@/ui/Profile/svelte'
  import ProfilePic from '@/ui/Profile/Pic.svelte'
  import Info from '@/ui/Profile/Info.svelte'
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import CommentsButton from '@/ui/Comments/Button.svelte'
  import { trackShowComments } from '@/analytics/events/interaction'
  import VoteButton from './VoteButton.svelte'
  import HoverEdit from './HoverEdit.svelte'

  export let id = null as null | number
  export let title = null as null | string
  export let user = null as null | SAN.Author
  export let currentUser: { id: string; following?: { users: { id: string }[] } } | null
  export let onEditClick: () => any
  export let type: CreationType
  export let fallback = 'Unsaved layout'
  export let editLabel = 'Edit'
  export let comments: {
    count: number
    active?: boolean
    onClick: (e?: any) => any
  }
  export let votes = null as null | Votes
  export let onVote
  export let titleHoverTooltipClass = ''
  export let hasInfo = true
  export let source: string
</script>

{#if id}
  <div class="creation row v-center mrg-m mrg--r">
    {#if user}
      <Tooltip openDelay={110}>
        <svelte:fragment slot="trigger">
          <Profile {user} {source} feature={type} class="$style.author" />
        </svelte:fragment>

        <svelte:fragment slot="tooltip">
          <Info {user} {type} {currentUser} />
        </svelte:fragment>
      </Tooltip>

      <div class="divider" />
    {/if}

    {#if title}
      <HoverEdit
        class="$style.title body-2"
        {currentUser}
        {editLabel}
        {onEditClick}
        {titleHoverTooltipClass}>{title}</HoverEdit
      >
    {/if}

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

  <CommentsButton
    {...comments}
    on:click={(e) => {
      trackShowComments({ id, source, feature: type })
      if (comments.onClick) comments.onClick(e)
    }}
    class="mrg-s mrg--r"
  />

  {#if id && votes}
    <VoteButton
      {id}
      {type}
      {votes}
      {source}
      {onVote}
      disabled={!currentUser}
      class="mrg-xxl mrg--r"
    />
  {/if}
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
