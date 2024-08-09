<script lang="ts">
  import img from './sanbase-avatar.svg'
  import { getDateFormats } from '../../../utils/dates'

  const {
    user,
    publishedAt,
  }: {
    user: {
      avatarUrl?: string
      id: string
      username: string
    }
    publishedAt: string
  } = $props()

  const date = $derived(formatDate(publishedAt))

  function formatDate(date: string) {
    const { MMM, D, YYYY } = getDateFormats(new Date(date))
    return `${MMM} ${D}, ${YYYY}`
  }
</script>

<a class="h-9 items-center gap-3 row hover:text-green" href="/profile" aria-label="User profile">
  <img src={img} alt="User profile" class="h-8 border border-transparent" />
  <div>
    <p class="text-sm">@{user.username}</p>
    <time class="text-xs font-medium text-waterloo" datetime={publishedAt}>{date}</time>
  </div>
</a>
