<script lang="ts">
  import Author from '@/ui/Profile/svelte'
  import { getScrollToCommentContext, getGetRepliedToCommentContext } from './context'

  const scrollToReply = getScrollToCommentContext()
  const getRepliedToComment = getGetRepliedToCommentContext()

  export let id: number

  $: comment = getRepliedToComment(id)
</script>

{#if comment}
  <a class="caption btn row" href="#comment-{id}" on:click|capture={scrollToReply}>
    <div>
      <Author user={comment.user} class="$style.comment" />
      {' ' + comment.content}
    </div>
  </a>
{/if}

<style>
  a {
    --bg-hover: var(--athens);
    margin: 0 0 4px 32px;
    padding: 8px;
    position: relative;
  }

  a::before,
  a::after {
    content: '';
    position: absolute;
    background: var(--porcelain);
    top: 16px;
    left: -17px;
    z-index: -2;
  }
  a::before {
    width: 1px;
    height: calc(100% - 17px);
  }
  a::after {
    width: 17px;
    height: 1px;
  }

  div {
    --img-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  div :global(.img) {
    margin: 0 4px 0 0;
    vertical-align: middle;
    display: inline-block;
    text-align: center;
  }

  .comment {
    display: inline-flex !important;
    align-items: baseline !important;
  }

  div,
  .comment {
    --color: var(--fiord) !important;
  }

  @supports not (display: -webkit-box) {
    div {
      white-space: nowrap;
    }
  }
</style>
