import type { Props } from './svelte';
export declare const getValue: (item: Props['data'][number], key?: string) => number;
export declare function getValueAt(data: Props['data'], offset: number, width: number): number;
type GetOffsetProps = {
    localOffset: number;
    sharedOffset: number | undefined;
    tooltipSyncKey: string;
    storeSyncKey: string | undefined;
};
export declare function getOffset({ localOffset, sharedOffset, tooltipSyncKey, storeSyncKey, }: GetOffsetProps): number;
export {};
