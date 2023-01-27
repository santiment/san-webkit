import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AssetProps = typeof __propDef.props;
export declare type AssetEvents = typeof __propDef.events;
export declare type AssetSlots = typeof __propDef.slots;
export default class Asset extends SvelteComponentTyped<AssetProps, AssetEvents, AssetSlots> {
}
export {};
