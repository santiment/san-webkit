<script lang="ts">
  import Author from '@/ui/Profile/svelte'
  import { markdownToPlainText } from '../Editor/markdown'
  import { getScrollToCommentContext, getGetRepliedToCommentContext } from './context'

  const scrollToReply = getScrollToCommentContext()
  const getRepliedToComment = getGetRepliedToCommentContext()

  export let id: number

  $: comment = getRepliedToComment(id)
</script>

{#if comment}
  <a class="caption btn row" href="#comment-{id}" on:click|capture={scrollToReply}>
    <div class="line-clamp">
      <Author user={comment.user} class="$style.comment" />
      {' ' + markdownToPlainText(comment.content)}
    </div>
  </a>
{/if}

<style lang="scss">
  a {
    --bg-hover: var(--athens);
    margin: 0 0 4px 32px;
    padding: 8px;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background: var(--porcelain);
      top: 16px;
      left: -17px;
      z-index: -2;
    }
    &::before {
      width: 1px;
      height: calc(100% - 17px);
    }
    &::after {
      width: 17px;
      height: 1px;
    }
  }

  div {
    --img-size: 16px;
    pointer-events: none;

    :global(.img) {
      margin: 0 4px 0 0;
      vertical-align: middle;
      display: inline-block;
      text-align: center;
    }
  }

  .comment {
    display: inline-flex !important;
    align-items: baseline !important;
  }

  div,
  .comment {
    --color: var(--fiord) !important;
  }
</style>
