<script>
  import LikeButton from '$ui/app/LikeButton/LikeButton.svelte'

  const insight = { votes: { totalVotes: 20, userVotes: 1 } }

  let { totalVotes, userVotes } = $derived(insight.votes)
</script>

<div class="flex h-screen items-center justify-center gap-4">
  <div class="flex flex-col items-start gap-2">
    <h3>No user votes</h3>

    <LikeButton id={1} type="insight" source="storybook" totalVotes={5} />
    <LikeButton id={1} type="insight" source="storybook" totalVotes={1} disabled />
  </div>

  <div class="flex flex-col items-start gap-2">
    <h3>With user votes</h3>

    <LikeButton id={1} type="insight" source="storybook" totalVotes={10} userVotes={3} />
    <LikeButton id={1} type="insight" source="storybook" totalVotes={1} userVotes={1} disabled />
  </div>

  <div class="flex flex-col items-start gap-2">
    <h3>Synced buttons</h3>

    <LikeButton id={1} type="insight" source="storybook" bind:totalVotes bind:userVotes />
    <LikeButton id={1} type="insight" source="storybook" bind:totalVotes bind:userVotes />
  </div>
</div>
