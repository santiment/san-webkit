/** @typedef {typeof __propDef.props}  SpecialOfferBannerProps */
/** @typedef {typeof __propDef.events}  SpecialOfferBannerEvents */
/** @typedef {typeof __propDef.slots}  SpecialOfferBannerSlots */
export default class SpecialOfferBanner extends SvelteComponentTyped<{
    expireAt?: number | undefined;
    percentOff?: number | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type SpecialOfferBannerProps = typeof __propDef.props;
export type SpecialOfferBannerEvents = typeof __propDef.events;
export type SpecialOfferBannerSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        expireAt?: number | undefined;
        percentOff?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
