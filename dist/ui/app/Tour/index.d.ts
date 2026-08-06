import { type Snippet } from 'svelte';
import { checkWasTourViewed } from './storage.js';
export { getSavedTourState } from './storage.js';
export type TTourStep = {
    element?: string | Element;
    id: string;
    title: string;
    description: string;
    content?: Snippet;
    side?: 'top' | 'right' | 'bottom' | 'left' | 'over';
    onPopoverRender?: (element: undefined | Element) => void;
};
export type TTourConfig = Partial<{
    initialStep: number;
    completeLabel: string;
    onNextStep: (id: string, lastStep?: {
        id: string;
        element: undefined | Element;
    }) => Promise<void>;
    onPrevStep: (id: string, lastStep?: {
        id: string;
        element: undefined | Element;
    }) => Promise<void>;
    onCompleted: (tourId: string) => void;
    onDestroy: () => void;
}>;
export declare const Tour: {
    activeId: undefined | string;
    start(id: string, steps: TTourStep[], config?: TTourConfig): Promise<void>;
    stop(): void;
    checkWasTourViewed: typeof checkWasTourViewed;
};
