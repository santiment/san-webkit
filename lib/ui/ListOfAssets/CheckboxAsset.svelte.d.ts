import { SvelteComponentTyped } from "svelte";
import type { Asset } from './types';
declare const __propDef: {
    props: {
        isActive?: boolean | undefined;
        item: Asset;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CheckboxAssetProps = typeof __propDef.props;
export declare type CheckboxAssetEvents = typeof __propDef.events;
export declare type CheckboxAssetSlots = typeof __propDef.slots;
export default class CheckboxAsset extends SvelteComponentTyped<CheckboxAssetProps, CheckboxAssetEvents, CheckboxAssetSlots> {
}
export {};
