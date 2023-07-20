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
  import { trackVote } from '@/analytics/events/interaction'
  import LikeButton from './LikeButton.svelte'

  let className = ''
  export { className as class }
  export let id: number
  export let type: VoteType
  export let disabled = false
  export let votes: Votes = newVotes()
  export let onVote
  export let onVoted = noop
  export let source: string

  function onClick() {
    onVote?.()
    vote(id, type)
      .then(onVoted)
      .catch(() => {
        votes.totalVotes -= 1
        votes.userVotes -= 1
      })

    trackVote({ id, feature: VoteTypeFeature[type], source })
  }
</script>

<LikeButton
  onVote={onClick}
  {disabled}
  class={className}
  bind:userVotes={votes.userVotes}
  bind:totalVotes={votes.totalVotes}
/>
