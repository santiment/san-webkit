import type { IPaneApi } from '@santiment-network/chart-next';
import { SvelteMap } from 'svelte/reactivity';
import { type TNominal } from '../../../../utils/index.js';
export type TPane = TNominal<unknown, 'TPane'> & IPaneApi<any>;
type TPaneWidget = {
    _paneCell: HTMLElement;
};
export declare const useChartPanesCtx: (() => {
    panes: {
        readonly $: SvelteMap<TPane, HTMLElement>;
    };
    onPaneWidgetMount(paneWidget: TPaneWidget, pane: TPane): () => void;
}) & {
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
    set: () => {
        panes: {
            readonly $: SvelteMap<TPane, HTMLElement>;
        };
        onPaneWidgetMount(paneWidget: TPaneWidget, pane: TPane): () => void;
    };
    __CTX: "webkit_useChartPanesCtx";
};
export {};
