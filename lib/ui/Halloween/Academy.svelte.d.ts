import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type AcademyProps = typeof __propDef.props;
export type AcademyEvents = typeof __propDef.events;
export type AcademySlots = typeof __propDef.slots;
export default class Academy extends SvelteComponentTyped<AcademyProps, AcademyEvents, AcademySlots> {
}
export {};
