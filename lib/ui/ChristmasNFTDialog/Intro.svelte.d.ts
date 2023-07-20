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
export type IntroProps = typeof __propDef.props;
export type IntroEvents = typeof __propDef.events;
export type IntroSlots = typeof __propDef.slots;
export default class Intro extends SvelteComponentTyped<IntroProps, IntroEvents, IntroSlots> {
}
export {};
