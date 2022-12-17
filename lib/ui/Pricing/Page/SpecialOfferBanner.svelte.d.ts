/** @typedef {typeof __propDef.props}  SpecialOfferBannerProps */
/** @typedef {typeof __propDef.events}  SpecialOfferBannerEvents */
/** @typedef {typeof __propDef.slots}  SpecialOfferBannerSlots */
export default class SpecialOfferBanner extends SvelteComponentTyped<{
    percentOff?: number | undefined;
    expireAt?: number | undefined;
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
        percentOff?: number | undefined;
        expireAt?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
