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
export declare type PersonProps = typeof __propDef.props;
export declare type PersonEvents = typeof __propDef.events;
export declare type PersonSlots = typeof __propDef.slots;
export default class Person extends SvelteComponentTyped<PersonProps, PersonEvents, PersonSlots> {
}
export {};
