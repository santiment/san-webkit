import { getContext, setContext } from 'svelte'

const SCROLL_TO_COMMENT_CONTEXT = 'scrollToComment'
export const setScrollToCommentContext = (scrollToComment: (e: MouseEvent) => void) =>
  setContext(SCROLL_TO_COMMENT_CONTEXT, scrollToComment)
export const getScrollToCommentContext = () =>
  getContext(SCROLL_TO_COMMENT_CONTEXT) as (e: MouseEvent) => void

const GET_REPLIED_TO_COMMENT_CONTEXT = 'getRepliedToComment'
export const setGetRepliedToCommentContext = (
  getRepliedToComment: (id: number) => SAN.Comment | undefined,
) => setContext(GET_REPLIED_TO_COMMENT_CONTEXT, getRepliedToComment)

export const getGetRepliedToCommentContext = () =>
  getContext(GET_REPLIED_TO_COMMENT_CONTEXT) as (id: number) => SAN.Comment | undefined
