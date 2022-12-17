import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        mooned?: boolean | undefined;
        totalVotes: number;
        moonNode?: undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type MoonProps = typeof __propDef.props;
export declare type MoonEvents = typeof __propDef.events;
export declare type MoonSlots = typeof __propDef.slots;
export default class Moon extends SvelteComponentTyped<MoonProps, MoonEvents, MoonSlots> {
}
export {};
