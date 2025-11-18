<script>
  import LikeButton from '$ui/app/LikeButton/LikeButton.svelte'
</script>

<div class="flex h-screen items-center justify-center gap-2">
  <LikeButton id={1} type="insight" source="storybook" totalVotes={5} />
  <LikeButton id={1} type="insight" source="storybook" totalVotes={10} userVotes={3} />
  <LikeButton id={1} type="insight" source="storybook" totalVotes={1} disabled />
  <LikeButton id={1} type="insight" source="storybook" totalVotes={1} userVotes={1} disabled />
</div>
