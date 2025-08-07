<script module lang="ts">
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
  import { trackEvent } from '$lib/analytics/index.js'
  import { Query } from '$lib/api/executor.js'

  import { mutateVote, VoteType } from './api.js'
  import LikeButton from './LikeButton.svelte'

  type TProps = {
    class?: string
    id: number | null | undefined
    type: VoteType
    disabled?: boolean
    votes?: Votes
    onVote?: () => void
    onVoted?: () => void
    source: string
  }

  let {
    class: className = '',
    id,
    type,
    disabled = false,
    votes = newVotes(),
    onVote,
    onVoted = () => {},
    source,
  }: TProps = $props()

  function onClick() {
    if (typeof id !== 'number') return

    onVote?.()

    mutateVote(Query)(id, type)
      .then(onVoted)
      .catch(() => {
        votes.totalVotes -= 1
        votes.userVotes -= 1
      })

    trackEvent('press', { id, feature: VoteTypeFeature[type], source })
  }
</script>

<LikeButton
  onVote={onClick}
  class={className}
  bind:userVotes={votes.userVotes}
  bind:totalVotes={votes.totalVotes}
  {disabled}
/>
