import { getContext, setContext } from 'svelte'
const SCROLL_TO_COMMENT_CONTEXT = 'scrollToComment'
export const setScrollToCommentContext = (scrollToComment) =>
  setContext(SCROLL_TO_COMMENT_CONTEXT, scrollToComment)
export const getScrollToCommentContext = () => getContext(SCROLL_TO_COMMENT_CONTEXT)
const GET_REPLIED_TO_COMMENT_CONTEXT = 'getRepliedToComment'
export const setGetRepliedToCommentContext = (getRepliedToComment) =>
  setContext(GET_REPLIED_TO_COMMENT_CONTEXT, getRepliedToComment)
export const getGetRepliedToCommentContext = () => getContext(GET_REPLIED_TO_COMMENT_CONTEXT)
//# sourceMappingURL=context.js.map
