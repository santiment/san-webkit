import { SvelteComponentTyped } from "svelte";
export declare function getRefCoordinates(data: any[], points: string[], target: number, datetimeKey?: string): {
    index: number;
    coordinates: string[];
};
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
export type PointRefProps = typeof __propDef.props;
export type PointRefEvents = typeof __propDef.events;
export type PointRefSlots = typeof __propDef.slots;
export default class PointRef extends SvelteComponentTyped<PointRefProps, PointRefEvents, PointRefSlots> {
}
export {};
