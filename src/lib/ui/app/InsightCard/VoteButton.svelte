<script>
  import LikeBtn from '$lib/ui/app/LikeButton/LikeButton.svelte'

  const { class: className = '', insight, source } = $props();
  let { id, votes } = $derived(insight);
 
</script>

<LikeBtn
  {id}
  {source}
  {onVoted}
  type="insightId"
  {votes}
  class={className}
/>
