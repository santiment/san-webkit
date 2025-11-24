<script>
  import LikeButton from '$ui/app/LikeButton/LikeButton.svelte'
</script>

<div class="flex h-screen items-center justify-center gap-2">
  <LikeButton class="h-10 !px-4" />
  <LikeButton totalVotes={10} userVotes={3} />
  <LikeButton totalVotes={1} disabled />
</div>
