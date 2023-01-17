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
export declare type TrendsProps = typeof __propDef.props;
export declare type TrendsEvents = typeof __propDef.events;
export declare type TrendsSlots = typeof __propDef.slots;
export default class Trends extends SvelteComponentTyped<TrendsProps, TrendsEvents, TrendsSlots> {
    get href(): () => string;
    get label(): () => string;
}
export {};
