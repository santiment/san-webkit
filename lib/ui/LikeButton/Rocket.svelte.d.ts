import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        rocketNode?: undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type RocketProps = typeof __propDef.props;
export declare type RocketEvents = typeof __propDef.events;
export declare type RocketSlots = typeof __propDef.slots;
export default class Rocket extends SvelteComponentTyped<RocketProps, RocketEvents, RocketSlots> {
}
export {};
