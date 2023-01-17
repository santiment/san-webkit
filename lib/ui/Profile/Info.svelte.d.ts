import { SvelteComponentTyped } from "svelte";
import type { CurrentUser } from './../../ui/FollowButton/flow';
import { CreationType } from './types';
declare const __propDef: {
    props: {
        user: SAN.Author & {
            name?: string;
        };
        currentUser: SAN.CurrentUser & CurrentUser;
        type: CreationType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type InfoProps = typeof __propDef.props;
export declare type InfoEvents = typeof __propDef.events;
export declare type InfoSlots = typeof __propDef.slots;
export default class Info extends SvelteComponentTyped<InfoProps, InfoEvents, InfoSlots> {
}
export {};
