import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        version?: string;
        onClassicClick?: () => void;
        onLogout?: () => void;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccountDropdownProps = typeof __propDef.props;
export type AccountDropdownEvents = typeof __propDef.events;
export type AccountDropdownSlots = typeof __propDef.slots;
export default class AccountDropdown extends SvelteComponent<AccountDropdownProps, AccountDropdownEvents, AccountDropdownSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        version?: string;
        onClassicClick?: () => void;
        onLogout?: () => void;
    }>);
    $$bindings: "";
}
export {};
