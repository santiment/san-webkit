export declare type ScrollContext = {
    scrollInterval: number | undefined;
    scrollParent: HTMLElement;
};
export declare function clearAutoScroll(ctx: Pick<ScrollContext, 'scrollInterval'>): void;
export declare function autoScroll(ctx: ScrollContext, nodeRect: any, scrollRect: any, yDiff: number): void;
export declare function getScrollingParent(node: null | HTMLElement): any;
