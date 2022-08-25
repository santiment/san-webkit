export declare const setScrollToCommentContext: (
  scrollToComment: (e: MouseEvent) => void,
) => (e: MouseEvent) => void
export declare const getScrollToCommentContext: () => (e: MouseEvent) => void
export declare const setGetRepliedToCommentContext: (
  getRepliedToComment: (id: number) => SAN.Comment | undefined,
) => (id: number) => SAN.Comment | undefined
export declare const getGetRepliedToCommentContext: () => (id: number) => SAN.Comment | undefined
