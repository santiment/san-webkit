<script>
  import LikeBtn from '$lib/ui/app/LikeButton/LikeButton.svelte'

  const { class: className = '', insight, source } = $props();
  let { id, votes } = $derived(insight);
 
  function onVoted() {
    console.log('vote!')
  }

  // TODO:
  // 1. Add mutation
  // 2. If that is not current user than disable
  // 3. Move analytics back
</script>

<LikeBtn
  {id}
  {source}
  {onVoted}
  type="insightId"
  {votes}
  class={className}
/>
