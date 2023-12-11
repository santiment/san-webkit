import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        valueFormatted?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        value: {};
    };
};
export type SvgTooltipProps = typeof __propDef.props;
export type SvgTooltipEvents = typeof __propDef.events;
export type SvgTooltipSlots = typeof __propDef.slots;
export default class SvgTooltip extends SvelteComponentTyped<SvgTooltipProps, SvgTooltipEvents, SvgTooltipSlots> {
}
export {};
