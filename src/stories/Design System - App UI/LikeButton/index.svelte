<script>
  import LikeButton from '$ui/app/LikeButton/LikeButton.svelte'
</script>

<div class="flex h-screen items-center justify-center gap-2">
  <LikeButton totalVotes={5} />
  <LikeButton totalVotes={10} userVotes={3} />
  <LikeButton totalVotes={1} disabled />
  <LikeButton totalVotes={1} userVotes={1} disabled />
</div>
