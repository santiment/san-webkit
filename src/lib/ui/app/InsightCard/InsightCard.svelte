<script lang="ts">
  import { getDateFormats } from '$lib/utils/dates.js'
  import Card from './Card.svelte'
  import Profile from '../Profile/Profile.svelte';

  let {
    class: className,
    insight,
    source,
    isWithPrice = process.browser,
  }: { class?: string, insight: any, source: string, isWithPrice: boolean } = $props();


  const { title, user, publishedAt, tags } = $derived(insight);
  const date = $derived(formatDate(publishedAt));
  const isMobile = $derived(false);

  function formatDate(date: Date) {
    const { MMM, D, YYYY } = getDateFormats(new Date(date))
    return `${MMM} ${D}, ${YYYY}`
  }
</script>

<Card {insight} {source} class={className} let:node let:href>
  <a {href} class="{isMobile ? 'body-1' : 'body-2'} line-clamp mrg-m mrg--b" sapper:prefetch>
    {title}
  </a>

  <div class="row v-center">
    <Profile {user} {source} feature="insight" class="$style.profile {isMobile ? 'txt-m' : ''}">
      <div class="{isMobile ? 'body-3' : 'caption'} txt-r c-waterloo">{date}</div>
    </Profile>
  </div>
</Card>
