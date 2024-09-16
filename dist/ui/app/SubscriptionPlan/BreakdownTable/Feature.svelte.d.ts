import { SvelteComponent } from "svelte";
import type { TBreakdownFeature } from './breakdown.js';
declare const __propDef: {
    props: {
        plans: Record<string, undefined | string | boolean>[];
        feature: TBreakdownFeature;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FeatureProps = typeof __propDef.props;
export type FeatureEvents = typeof __propDef.events;
export type FeatureSlots = typeof __propDef.slots;
export default class Feature extends SvelteComponent<FeatureProps, FeatureEvents, FeatureSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        plans: Record<string, undefined | string | boolean>[];
        feature: TBreakdownFeature;
    }>);
    $$bindings: "";
}
export {};
