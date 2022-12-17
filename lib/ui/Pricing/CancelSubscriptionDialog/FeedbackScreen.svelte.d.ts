import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        feedback: any;
        reasons: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type FeedbackScreenProps = typeof __propDef.props;
export declare type FeedbackScreenEvents = typeof __propDef.events;
export declare type FeedbackScreenSlots = typeof __propDef.slots;
export default class FeedbackScreen extends SvelteComponentTyped<FeedbackScreenProps, FeedbackScreenEvents, FeedbackScreenSlots> {
}
export {};
