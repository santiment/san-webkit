import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plan: SAN.Plan;
        name: string;
        price: string;
        isEligibleForTrial?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type BannerProps = typeof __propDef.props;
export declare type BannerEvents = typeof __propDef.events;
export declare type BannerSlots = typeof __propDef.slots;
export default class Banner extends SvelteComponentTyped<BannerProps, BannerEvents, BannerSlots> {
}
export {};
