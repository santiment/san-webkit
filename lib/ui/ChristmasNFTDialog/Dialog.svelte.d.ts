import { SvelteComponentTyped } from "svelte";
export declare const showChristmasNFTDialog: (props?: any) => Promise<unknown> | undefined;
export declare const dataPreloader: (node: HTMLElement) => void;
import { Page } from './types';
declare const __propDef: {
    props: {
        [x: string]: any;
        page?: Page.Info | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
}
export {};
