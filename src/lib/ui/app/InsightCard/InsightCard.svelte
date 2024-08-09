<script lang="ts">
  import Profile from './Profile.svelte'
  import ActionButton from './ActionButton.svelte'
  import Tags from './Tags.svelte'
  import Editorial from './Editorial.svelte'

  const {
    insight,
  }: {
    insight: {
      title: string
      user: { avatarUrl?: string; id: string; username: string }
      tags: { name: string }[]
      publishedAt: string
      commentsCount: number
      votes: {
        currentUserVotes: number
      }
    }
  } = $props()
</script>

<div class="rounded border border-porcelain p-6">
  <a href="/" class="text-xl text-rhino hover:text-green">
    <h4>{insight.title}</h4>
  </a>
  <div class="min-h-[66px] items-center justify-between row">
    <Profile user={insight.user} publishedAt={insight.publishedAt} />
    <Editorial />
  </div>
  <div class="h-16 items-center justify-between border-t border-porcelain row">
    <div class="gap-5 row">
      <ActionButton count={insight.votes.currentUserVotes} iconId="like" />
      <ActionButton count={insight.commentsCount} iconId="comment" />
    </div>
    <Tags items={insight.tags} />
  </div>
</div>
