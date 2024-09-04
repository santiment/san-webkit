import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        class?: string;
        slug: string;
        placeholderSize?: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AssetLogoProps = typeof __propDef.props;
export type AssetLogoEvents = typeof __propDef.events;
export type AssetLogoSlots = typeof __propDef.slots;
export default class AssetLogo extends SvelteComponent<AssetLogoProps, AssetLogoEvents, AssetLogoSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        class?: string;
        slug: string;
        placeholderSize?: number;
    }>);
    $$bindings: "";
}
export {};
