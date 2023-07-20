import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        item: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type PersonProps = typeof __propDef.props;
export type PersonEvents = typeof __propDef.events;
export type PersonSlots = typeof __propDef.slots;
export default class Person extends SvelteComponentTyped<PersonProps, PersonEvents, PersonSlots> {
}
export {};
