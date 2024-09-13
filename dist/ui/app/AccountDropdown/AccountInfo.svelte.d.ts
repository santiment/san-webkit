import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AccountInfoProps = typeof __propDef.props;
export type AccountInfoEvents = typeof __propDef.events;
export type AccountInfoSlots = typeof __propDef.slots;
export default class AccountInfo extends SvelteComponent<AccountInfoProps, AccountInfoEvents, AccountInfoSlots> {
}
export {};
