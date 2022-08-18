declare type ScheduledComment = {
    id: number;
    content: string;
    href: string;
};
export declare function saveComment(type: SAN.CommentsType, id: number, content: string, commentsForTitle: string): void;
export declare function clearSavedComment(): void;
export declare const lookupSavedComment: () => ScheduledComment | undefined;
declare type CancelTimer = () => void;
export declare function scrollToComment(comment?: HTMLElement | null, removeHighlight?: () => void, block?: ScrollIntoViewOptions['block']): undefined | CancelTimer;
export declare const findCommentNode: (commentsNode: HTMLElement, href: string) => HTMLElement | null;
export declare function adjustHeight(node: HTMLTextAreaElement): void;
export declare function getDatetime(date: string): string;
export declare function sanitize(content: string): string;
export {};
