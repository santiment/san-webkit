import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
declare const __propDef: {
    props: {
        class?: string | undefined;
        item: Asset;
        isActive?: boolean | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AssetProps = typeof __propDef.props;
export type AssetEvents = typeof __propDef.events;
export type AssetSlots = typeof __propDef.slots;
export default class Asset extends SvelteComponentTyped<AssetProps, AssetEvents, AssetSlots> {
}
export {};
