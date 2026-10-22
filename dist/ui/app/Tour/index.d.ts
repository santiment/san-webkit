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
type TTourCtx = Record<string, unknown>;
type TTourStepHandler = <GCtx extends TTourCtx = TTourCtx>(id: string, lastStep?: {
    id: string;
    element: undefined | Element;
}, ctx?: GCtx) => Promise<void>;
export type TTourConfig = Partial<{
    initialStep: number;
    completeLabel: string;
    ctx?: TTourCtx;
    setup: <GCtx extends TTourCtx>(id: string, ctx?: Partial<GCtx>) => Promise<void>;
    onNextStep: TTourStepHandler;
    onPrevStep: TTourStepHandler;
    onCompleted: (tourId: string) => void;
    onDestroy: () => void;
}>;
export declare const Tour: {
    activeId: undefined | string;
    start(id: string, steps: TTourStep[], config?: TTourConfig): Promise<void>;
    stop(): void;
    checkWasTourViewed: typeof checkWasTourViewed;
};
