<script lang="ts">
  import type { CreationType } from '@/ui/Profile/types'
  import type { Votes } from './VoteButton.svelte'
  import Profile from '@/ui/Profile/svelte'
  import Info from '@/ui/Profile/Info.svelte'
  import Svg from '@/ui/Svg/svelte'
  import Tooltip from '@/ui/Tooltip/svelte'
  import CommentsButton from '@/ui/Comments/Button.svelte'
  import HoverEdit from './HoverEdit.svelte'
  import VoteButton from './VoteButton.svelte'

  export let id: number
  export let title: string
  export let user: SAN.Author
  export let currentUser: SAN.CurrentUser | undefined
  export let onEditClick: () => any
  export let type: CreationType
  export let comments: {
    count: number
    class?: string
    active?: boolean
    onClick: () => any
  }
  export let votes: Votes
  export let onVote

  let isEditVisible, showEdit, hideEdit

  $: hide = isEditVisible ? null : hideEdit
</script>

<div class="creation row v-center mrg-l mrg--r">
  <Tooltip openDelay={110}>
    <svelte:fragment slot="trigger">
      <Profile {user} class="$style.author" />
    </svelte:fragment>

    <svelte:fragment slot="tooltip">
      <Info {user} {type} />
    </svelte:fragment>
  </Tooltip>

  <div class="divider" />

  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <span class="title body-2" on:mouseover={showEdit} on:mouseleave={hide}>
    {title}
  </span>

  <Tooltip openDelay={110}>
    <div slot="trigger" class="btn info mrg-s mrg--l row v-center">
      <Svg id="info" w="16" />
    </div>
    <div slot="tooltip" class="tooltip">
      <slot name="info" />
    </div>
  </Tooltip>
</div>

<CommentsButton {...comments} on:click={comments.onClick} class="mrg-s mrg--r" />
<VoteButton {id} {votes} {onVote} disabled={!currentUser} class="mrg-xxl mrg--r" />

{#if currentUser}
  <HoverEdit bind:isEditVisible bind:showEdit bind:hideEdit onClick={onEditClick} />
{/if}

<style>
  .creation {
    overflow: hidden;
  }

  .info {
    --fill: var(--waterloo);
    --fill-hover: var(--green);
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
  }
  .author :global(span) {
    max-width: 140px;
  }

  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
