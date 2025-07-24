import { SvelteMap } from 'svelte/reactivity';
import { type TNominal } from '../../../../utils/index.js';
export type TPane = TNominal<unknown, 'TPane'>;
type TPaneWidget = {
    _paneCell: HTMLElement;
};
export declare const useChartPanesCtx: (() => {
    panes: {
        readonly $: SvelteMap<{
            readonly [Symbol.species]: "TPane";
        }, HTMLElement>;
    };
    onPaneWidgetMount(paneWidget: TPaneWidget, pane: TPane): () => void;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        panes: {
            readonly $: SvelteMap<{
                readonly [Symbol.species]: "TPane";
            }, HTMLElement>;
        };
        onPaneWidgetMount(paneWidget: TPaneWidget, pane: TPane): () => void;
    };
    set: () => {
        panes: {
            readonly $: SvelteMap<{
                readonly [Symbol.species]: "TPane";
            }, HTMLElement>;
        };
        onPaneWidgetMount(paneWidget: TPaneWidget, pane: TPane): () => void;
    };
};
export {};
