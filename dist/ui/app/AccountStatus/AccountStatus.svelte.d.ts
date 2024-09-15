import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccountStatusProps = typeof __propDef.props;
export type AccountStatusEvents = typeof __propDef.events;
export type AccountStatusSlots = typeof __propDef.slots;
export default class AccountStatus extends SvelteComponent<AccountStatusProps, AccountStatusEvents, AccountStatusSlots> {
}
export {};
