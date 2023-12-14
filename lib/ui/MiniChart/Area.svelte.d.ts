import { SvelteComponentTyped } from "svelte";
import type { Props } from './svelte';
declare const __propDef: {
    props: {
        class?: string | undefined;
        id?: string | undefined;
        data: Props['data'];
        width: Props['width'];
        height: Props['height'];
        valueKey?: Props['valueKey'];
        style?: Props['style'];
        getAreaPoints?: ((points: Props['points'], linePoints: string) => string) | undefined;
    };
    events: {
        mousemove: MouseEvent;
        mouseleave: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type AreaProps = typeof __propDef.props;
export type AreaEvents = typeof __propDef.events;
export type AreaSlots = typeof __propDef.slots;
export default class Area extends SvelteComponentTyped<AreaProps, AreaEvents, AreaSlots> {
    get getAreaPoints(): (points: string[], linePoints: string) => string;
}
export {};
