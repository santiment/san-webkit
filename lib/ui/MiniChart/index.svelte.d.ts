import { SvelteComponentTyped } from "svelte";
import type { Props } from './svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        data?: {
            [key: string]: any;
        }[] | undefined;
        points?: string[] | undefined;
        width?: number | undefined;
        height?: number | undefined;
        valueKey: string | undefined;
        style: Props['style'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {
            points: string[];
            linePoints: string;
        };
    };
};
export declare type IndexProps = typeof __propDef.props;
export declare type IndexEvents = typeof __propDef.events;
export declare type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
