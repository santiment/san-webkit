import { type Snippet } from 'svelte';
import { checkWasTourViewed } from './storage.js';
export type TTourStep = {
    element: string | Element;
    id: string;
    title: string;
    description: string;
    content?: Snippet;
    side?: 'top' | 'right' | 'bottom' | 'left' | 'over';
};
export type TTourConfig = Partial<{
    initialStep: number;
    onNextStep: (id: string, lastStep?: {
        id: string;
        element: undefined | Element;
    }) => void;
    onPrevStep: (id: string, lastStep?: {
        id: string;
        element: undefined | Element;
    }) => void;
    onDestroy: () => void;
}>;
export declare const Tour: {
    activeId: undefined | string;
    start(id: string, steps: TTourStep[], config?: TTourConfig): Promise<void>;
    stop(): void;
    checkWasTourViewed: typeof checkWasTourViewed;
};
