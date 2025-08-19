<script>import Author from './../../ui/Profile/svelte';
import { markdownToPlainText } from '../Editor/markdown';
import { getScrollToCommentContext, getGetRepliedToCommentContext } from './context';
const scrollToReply = getScrollToCommentContext();
const getRepliedToComment = getGetRepliedToCommentContext();
export let id;
$: comment = getRepliedToComment(id);
</script>

{#if comment}
  <a class="caption btn row" href="#comment-{id}" on:click|capture={scrollToReply}>
    <div class="line-clamp">
      <Author user={comment.user} class="comment-4Sws8b" />
      {' ' + markdownToPlainText(comment.content)}
    </div>
  </a>
{/if}

<style >/**
@include dac(desktop, tablet, phone) {
  main {
    background: red;
  }
}
*/
/**
@include dacnot(desktop) {
  main {
    background: red;
  }
}
*/
a {
  --bg-hover: var(--athens);
  margin: 0 0 4px 32px;
  padding: 8px;
  position: relative;
}
a::before, a::after {
  content: "";
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
  pointer-events: none;
}
div :global(.img) {
  margin: 0 4px 0 0;
  vertical-align: middle;
  display: inline-block;
  text-align: center;
}

:global(.comment-4Sws8b) {
  display: inline-flex !important;
  align-items: baseline !important;
}

div,
:global(.comment-4Sws8b) {
  --color: var(--fiord) !important;
}</style>
