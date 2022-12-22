import { SvelteComponentTyped } from "svelte";
import { Page } from './types';
declare const __propDef: {
    props: {
        page: Page;
        closeDialog: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type IntroProps = typeof __propDef.props;
export declare type IntroEvents = typeof __propDef.events;
export declare type IntroSlots = typeof __propDef.slots;
export default class Intro extends SvelteComponentTyped<IntroProps, IntroEvents, IntroSlots> {
}
export {};
