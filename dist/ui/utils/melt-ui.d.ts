import type { MeltActionReturn } from '@melt-ui/svelte/internal/types';
import type { SS } from 'svelte-runes';
export declare function useMelt(ref: SS<null | HTMLElement>, meltStore: {
    subscribe: (value: any) => () => any;
} & ((node: HTMLElement) => MeltActionReturn<any>)): void;
