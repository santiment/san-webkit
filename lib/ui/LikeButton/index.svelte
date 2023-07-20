<script context="module">export const newVotes = () => ({ totalVotes: 0, userVotes: 0 });
export const VoteTypeFeature = {
    [VoteType.Insight]: 'insight',
    [VoteType.Dashboard]: 'dashboard',
    [VoteType.Watchlist]: 'watchlist',
    [VoteType.Layout]: 'chart_layout',
};
</script>

<script>import { noop } from './../../utils';
import { vote, VoteType } from './../../api/vote';
import { trackVote } from './../../analytics/events/interaction';
import LikeButton from './LikeButton.svelte';
let className = '';
export { className as class };
export let id;
export let type;
export let disabled = false;
export let votes = newVotes();
export let onVote;
export let onVoted = noop;
export let source;
function onClick() {
    onVote === null || onVote === void 0 ? void 0 : onVote();
    vote(id, type)
        .then(onVoted)
        .catch(() => {
        votes.totalVotes -= 1;
        votes.userVotes -= 1;
    });
    trackVote({ id, feature: VoteTypeFeature[type], source });
}
</script>

<LikeButton
  onVote={onClick}
  {disabled}
  class={className}
  bind:userVotes={votes.userVotes}
  bind:totalVotes={votes.totalVotes}
/>
