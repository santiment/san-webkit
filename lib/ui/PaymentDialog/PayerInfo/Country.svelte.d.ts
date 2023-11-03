import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CountryProps = typeof __propDef.props;
export type CountryEvents = typeof __propDef.events;
export type CountrySlots = typeof __propDef.slots;
export default class Country extends SvelteComponentTyped<CountryProps, CountryEvents, CountrySlots> {
}
export {};
