<script lang="ts">
  import { INSIGHTS_ORIGIN } from '$lib/utils/links.js'
  import { getSEOLinkFromIdAndTitle } from '$lib/utils/url/index.js'

  import Profile from './Profile.svelte'
  import SocialActionLink from './SocialActionLink.svelte'
  import Tags from './Tags.svelte'
  import Editorial from './Editorial.svelte'

  const {
    insight,
  }: {
    insight: {
      id: string
      title: string
      user: { avatarUrl?: string; id: number; username: string; email?: string }
      tags: { name: string }[]
      publishedAt: string
      commentsCount: number
      votes: {
        currentUserVotes: number
        totalVotes: number
        userVotes: number
      }
    }
  } = $props()

  const href = $derived(
    `${INSIGHTS_ORIGIN}/read/${getSEOLinkFromIdAndTitle(insight.id, insight.title)}`,
  )
</script>

<article class="rounded border border-porcelain p-6">
  <header>
    <a
      {href}
      class="text-xl text-rhino hover:text-green"
      aria-label="Read more about {insight.title}"
    >
      <h4>{insight.title}</h4>
    </a>
  </header>

  <section class="min-h-[66px] items-center justify-between row">
    <Profile user={insight.user} publishedAt={insight.publishedAt} />
    <Editorial userId={insight.user.id} />
  </section>

  <footer class="h-16 items-center justify-between border-t border-porcelain row">
    <div class="gap-5 row">
      <SocialActionLink {href} count={insight.votes.totalVotes} icon="like" />
      <SocialActionLink href="{href}?_wc=1#comments" count={insight.commentsCount} icon="comment" />
    </div>
    <Tags items={insight.tags} />
  </footer>
</article>
