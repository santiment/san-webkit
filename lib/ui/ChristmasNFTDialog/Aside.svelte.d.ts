/** @typedef {typeof __propDef.props}  AsideProps */
/** @typedef {typeof __propDef.events}  AsideEvents */
/** @typedef {typeof __propDef.slots}  AsideSlots */
export default class Aside extends SvelteComponentTyped<{
    insights?: any[] | undefined;
    isNftWinner?: boolean | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type AsideProps = typeof __propDef.props;
export type AsideEvents = typeof __propDef.events;
export type AsideSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        insights?: any[] | undefined;
        isNftWinner?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
