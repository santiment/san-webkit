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
export type MoonProps = typeof __propDef.props;
export type MoonEvents = typeof __propDef.events;
export type MoonSlots = typeof __propDef.slots;
export default class Moon extends SvelteComponentTyped<MoonProps, MoonEvents, MoonSlots> {
}
export {};
