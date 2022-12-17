import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        target: number;
        data: any[];
        points: string[];
        stroke?: string | undefined;
        datetimeKey?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type PointRefProps = typeof __propDef.props;
export declare type PointRefEvents = typeof __propDef.events;
export declare type PointRefSlots = typeof __propDef.slots;
export default class PointRef extends SvelteComponentTyped<PointRefProps, PointRefEvents, PointRefSlots> {
}
export {};
