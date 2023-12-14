import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        id?: string | undefined;
        data: number[] | {
            [key: string]: any;
        }[];
        width: number;
        height: number;
        valueKey?: string | undefined;
        style?: string | undefined;
        getAreaPoints?: ((points: string[], linePoints: string) => string) | undefined;
        tooltipVisible?: boolean | undefined;
        tooltipSyncKey?: string | undefined;
        formatTooltipValue?: ((value: number) => string) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type InteractiveAreaProps = typeof __propDef.props;
export type InteractiveAreaEvents = typeof __propDef.events;
export type InteractiveAreaSlots = typeof __propDef.slots;
export default class InteractiveArea extends SvelteComponentTyped<InteractiveAreaProps, InteractiveAreaEvents, InteractiveAreaSlots> {
}
export {};
