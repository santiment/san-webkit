export { showIntercom } from "./../analytics/intercom";
/** @typedef {typeof __propDef.props}  HelpFeedbackProps */
/** @typedef {typeof __propDef.events}  HelpFeedbackEvents */
/** @typedef {typeof __propDef.slots}  HelpFeedbackSlots */
export default class HelpFeedback extends SvelteComponentTyped<{
    class?: string | undefined;
}, {
    click: MouseEvent;
} & {
    [evt: string]: CustomEvent<any>;
}, {}> {
}
export type HelpFeedbackProps = typeof __propDef.props;
export type HelpFeedbackEvents = typeof __propDef.events;
export type HelpFeedbackSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        class?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
