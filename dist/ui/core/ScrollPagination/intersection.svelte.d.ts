import type { Attachment } from 'svelte/attachments';
export declare function useIntersection(onIntersect: (entry: IntersectionObserverEntry) => void, options?: Omit<IntersectionObserverInit, 'root'>): {
    root: Attachment<Element>;
    target: Attachment<Element>;
};
