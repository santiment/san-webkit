import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        user: any;
        isFullLink: boolean;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccountProps = typeof __propDef.props;
export type AccountEvents = typeof __propDef.events;
export type AccountSlots = typeof __propDef.slots;
export default class Account extends SvelteComponentTyped<AccountProps, AccountEvents, AccountSlots> {
}
export {};
