<script context="module" lang="ts">
  export type Votes = {
    totalVotes: number
    userVotes: number
  }

  export const newVotes = () => ({ totalVotes: 0, userVotes: 0 })

  export const VoteTypeFeature: { [K in VoteType]: string } = {
    [VoteType.Insight]: 'insight',
    [VoteType.Dashboard]: 'dashboard',
    [VoteType.Watchlist]: 'watchlist',
    [VoteType.Layout]: 'chart_layout',
  }
</script>

<script lang="ts">
  import { noop } from '@/utils'
  import { vote, VoteType } from '@/api/vote'
  import LikeButton from './LikeButton.svelte'

  const {
    class: className = '',
    id,
    type,
    disabled = false,
    votes = newVotes(),
    onVote,
    onVoted = noop,
    source
  }: {
    class?: string;
    id: number | null | undefined,
    type: VoteType,
    disabled?: boolean;
    votes: Votes,
    onVote: any,
    onVoted: any,
    source: string
  } = $props();

  function onClick() {
    if (typeof id !== 'number') return

    onVote?.()

    // trackVote({ id, feature: VoteTypeFeature[type], source })
  }
</script>

<LikeButton
  onVote={onClick}
  {disabled}
  class={className}
  bind:userVotes={votes.userVotes}
  bind:totalVotes={votes.totalVotes}
/>
