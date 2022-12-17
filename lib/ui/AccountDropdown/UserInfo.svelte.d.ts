/** @typedef {typeof __propDef.props}  UserInfoProps */
/** @typedef {typeof __propDef.events}  UserInfoEvents */
/** @typedef {typeof __propDef.slots}  UserInfoSlots */
export default class UserInfo extends SvelteComponentTyped<{
    user: any;
    subscriptionInfo: any;
    variant?: AccountStatusType.First | undefined;
    isShowingFollowers?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type UserInfoProps = typeof __propDef.props;
export type UserInfoEvents = typeof __propDef.events;
export type UserInfoSlots = typeof __propDef.slots;
import { AccountStatusType } from "./../../ui/AccountStatus.svelte";
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        user: any;
        subscriptionInfo: any;
        variant?: AccountStatusType.First | undefined;
        isShowingFollowers?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
