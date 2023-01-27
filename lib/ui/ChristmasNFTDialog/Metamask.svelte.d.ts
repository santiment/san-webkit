import { SvelteComponentTyped } from "svelte";
import type { CurrentUser } from './types';
declare const __propDef: {
    props: {
        currentUser: CurrentUser;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MetamaskProps = typeof __propDef.props;
export declare type MetamaskEvents = typeof __propDef.events;
export declare type MetamaskSlots = typeof __propDef.slots;
export default class Metamask extends SvelteComponentTyped<MetamaskProps, MetamaskEvents, MetamaskSlots> {
}
export {};
