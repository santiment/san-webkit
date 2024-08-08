<script lang="ts">
  import Svg from '$ui/core/Svg/index.js'
  import VoteButton from './VoteButton.svelte';
  import CommentBtn from './CommentButton.svelte'

  const { insight, href, source } = $props();

  const { id, tags, commentsCount, isPro } = $derived(insight);
  const isMobile = $derived(false);
</script>

<div class="bottom row justify v-center c-waterloo">
  <div class="row v-center">
    <VoteButton {insight} {source} />
    <CommentBtn {id} {href} {source} count={commentsCount} />
  </div>

  <div class="row v-center">
    <div class="tags c-waterloo mrg-a mrg--l caption row">
      <!-- <Tags {tags} {isPro} shouldSliceTags={isMobile} /> -->
    </div>
    {#if isPro}
      <Svg id="crown" w={12} h={9} class="$style.crown" />
    {/if}
  </div>
</div>

<style lang="postcss">
  .bottom {
    border-top: 1px solid var(--porcelain);
    padding: 12px 16px 12px 24px;
  }

  .crown {
    fill: var(--orange);
    margin-left: 20px;
  }

  .tags {
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 4px;
  }

  :global(body:not(.desktop)) {
    .bottom {
      padding: 12px 20px;
      gap: 16px;
    }

    .crown {
      margin-left: 12px;
    }

    .tags {
      gap: 8px;
    }
  }
</style>
