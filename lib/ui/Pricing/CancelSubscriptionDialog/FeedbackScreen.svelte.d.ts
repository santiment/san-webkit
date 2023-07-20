import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        feedback: any;
        reasons: any;
        error?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FeedbackScreenProps = typeof __propDef.props;
export type FeedbackScreenEvents = typeof __propDef.events;
export type FeedbackScreenSlots = typeof __propDef.slots;
export default class FeedbackScreen extends SvelteComponentTyped<FeedbackScreenProps, FeedbackScreenEvents, FeedbackScreenSlots> {
}
export {};
