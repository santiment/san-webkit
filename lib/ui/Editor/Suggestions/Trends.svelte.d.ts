import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        searchTerm?: string | undefined;
        href?: (() => string) | undefined;
        label?: (() => string) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TrendsProps = typeof __propDef.props;
export type TrendsEvents = typeof __propDef.events;
export type TrendsSlots = typeof __propDef.slots;
export default class Trends extends SvelteComponentTyped<TrendsProps, TrendsEvents, TrendsSlots> {
    get href(): () => string;
    get label(): () => string;
}
export {};
