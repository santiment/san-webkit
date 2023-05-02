import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
        src?: string | null | undefined;
        placeholderWidth?: number | undefined;
        alt?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PicProps = typeof __propDef.props;
export type PicEvents = typeof __propDef.events;
export type PicSlots = typeof __propDef.slots;
export default class Pic extends SvelteComponentTyped<PicProps, PicEvents, PicSlots> {
}
export {};
