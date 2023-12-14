import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        plan: SAN.Plan;
        source: string;
        closeDialog?: ((_?: any) => any) | undefined;
        ctx?: {
            total: number;
            coupon: string;
        } | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AppleGooglePayProps = typeof __propDef.props;
export type AppleGooglePayEvents = typeof __propDef.events;
export type AppleGooglePaySlots = typeof __propDef.slots;
export default class AppleGooglePay extends SvelteComponentTyped<AppleGooglePayProps, AppleGooglePayEvents, AppleGooglePaySlots> {
}
export {};
