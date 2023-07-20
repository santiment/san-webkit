<script>import { VoteType } from './../../api/vote';
import LikeButton from './../../ui/LikeButton/svelte';
import { CreationType } from './../../ui/Profile/types';
import { newVotes } from '../LikeButton/index.svelte';
let className = '';
export { className as class };
export let id;
export let type;
export let disabled = false;
export let votes = newVotes();
export let onVote;
export let source;
const CreationVoteType = {
    [CreationType.Layout]: VoteType.Layout,
    [CreationType.Watchlist]: VoteType.Watchlist,
    [CreationType.Dashboard]: VoteType.Dashboard,
};
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
