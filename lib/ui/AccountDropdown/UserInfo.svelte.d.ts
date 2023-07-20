import { SvelteComponentTyped } from "svelte";
import { AccountStatusType } from './../../ui/AccountStatus.svelte';
declare const __propDef: {
    props: {
        user: any;
        variant?: AccountStatusType.First | undefined;
        isShowingFollowers?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type UserInfoProps = typeof __propDef.props;
export type UserInfoEvents = typeof __propDef.events;
export type UserInfoSlots = typeof __propDef.slots;
export default class UserInfo extends SvelteComponentTyped<UserInfoProps, UserInfoEvents, UserInfoSlots> {
}
export {};
