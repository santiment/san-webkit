<script context="module" lang="ts">
  export type Votes = {
    totalVotes: 0
    userVotes: 0
  }
</script>

<script lang="ts">
  import { vote, VoteType } from '@/api/vote'
  import LikeButton from '@/ui/LikeButton/svelte'

  let className = ''
  export { className as class }
  export let id: number
  export let disabled = false
  export let votes: Votes = { totalVotes: 0, userVotes: 0 }
  export let onVote

  function onClick() {
    onVote?.()
    vote(id, VoteType.Layout).catch(() => {
      votes.totalVotes -= 1
      votes.userVotes -= 1
    })
  }
</script>

<LikeButton
  onVote={onClick}
  {disabled}
  class={className}
  bind:userVotes={votes.userVotes}
  bind:totalVotes={votes.totalVotes} />
