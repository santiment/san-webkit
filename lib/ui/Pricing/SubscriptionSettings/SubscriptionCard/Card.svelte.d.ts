/** @typedef {typeof __propDef.props}  CardProps */
/** @typedef {typeof __propDef.events}  CardEvents */
/** @typedef {typeof __propDef.slots}  CardSlots */
export default class Card extends SvelteComponentTyped<{
    label: any;
    link: any;
    title: any;
    action: any;
    billing: any;
    discount: any;
    price: any;
    badge: any;
    badgeIcon: any;
    subaction: any;
    onActionClick: any;
    onSubactionClick: any;
    disabled?: boolean | undefined;
    isActive?: boolean | undefined;
    isFullAccess?: boolean | undefined;
    green?: boolean | undefined;
    orange?: boolean | undefined;
    yellow?: boolean | undefined;
    isChecked?: boolean | undefined;
    shouldHideBillingInfo?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {
    default: {};
}> {
}
export type CardProps = typeof __propDef.props;
export type CardEvents = typeof __propDef.events;
export type CardSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        label: any;
        link: any;
        title: any;
        action: any;
        billing: any;
        discount: any;
        price: any;
        badge: any;
        badgeIcon: any;
        subaction: any;
        onActionClick: any;
        onSubactionClick: any;
        disabled?: boolean | undefined;
        isActive?: boolean | undefined;
        isFullAccess?: boolean | undefined;
        green?: boolean | undefined;
        orange?: boolean | undefined;
        yellow?: boolean | undefined;
        isChecked?: boolean | undefined;
        shouldHideBillingInfo?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export {};
