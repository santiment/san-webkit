import { SvelteComponentTyped } from "svelte";
export declare const queryUser: (id: number) => Promise<any>;
import type { CreationType } from './../../../ui/Profile/types';
declare const __propDef: {
    props: {
        id: number;
        currentUser: any;
        type: CreationType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type UserInfoProps = typeof __propDef.props;
export declare type UserInfoEvents = typeof __propDef.events;
export declare type UserInfoSlots = typeof __propDef.slots;
export default class UserInfo extends SvelteComponentTyped<UserInfoProps, UserInfoEvents, UserInfoSlots> {
}
export {};
