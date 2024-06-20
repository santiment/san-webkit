import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id: string;
        class?: string | undefined;
        w?: string | number | undefined;
        h?: string | number | undefined;
        illus?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SvgProps = typeof __propDef.props;
export type SvgEvents = typeof __propDef.events;
export type SvgSlots = typeof __propDef.slots;
export default class Svg extends SvelteComponent<SvgProps, SvgEvents, SvgSlots> {
    constructor(options?: import("svelte").ComponentConstructorOptions<{
        id: string;
        class?: string | undefined;
        w?: string | number | undefined;
        h?: string | number | undefined;
        illus?: boolean | undefined;
    }>);
    $$bindings: "";
}
export {};
