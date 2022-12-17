import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AcademyProps = typeof __propDef.props;
export declare type AcademyEvents = typeof __propDef.events;
export declare type AcademySlots = typeof __propDef.slots;
export default class Academy extends SvelteComponentTyped<AcademyProps, AcademyEvents, AcademySlots> {
}
export {};
