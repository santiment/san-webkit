<script lang="ts">
  import type { Votes } from '../LikeButton/index.svelte'

  import { VoteType } from '@/api/vote'
  import LikeButton from '@/ui/LikeButton/svelte'
  import { CreationType } from '@/ui/Profile/types'
  import { newVotes } from '../LikeButton/index.svelte'

  let className = ''
  export { className as class }
  export let id: number
  export let type: CreationType
  export let disabled = false
  export let votes: Votes = newVotes()
  export let onVote
  export let source: string

  const CreationVoteType = {
    [CreationType.Layout]: VoteType.Layout,
    [CreationType.Watchlist]: VoteType.Watchlist,
    [CreationType.Dashboard]: VoteType.Dashboard,
  }
</script>

<LikeButton
  type={CreationVoteType[type]}
  {id}
  {onVote}
  {disabled}
  class={className}
  {source}
  bind:votes
/>
