import { SvelteComponentTyped } from "svelte";
import { Page } from './types';
declare const __propDef: {
    props: {
        page: Page;
        title: string;
        isNftWinner?: boolean | undefined;
        isDiscountWinner?: boolean | undefined;
        insights?: any[] | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type PageLayoutProps = typeof __propDef.props;
export declare type PageLayoutEvents = typeof __propDef.events;
export declare type PageLayoutSlots = typeof __propDef.slots;
export default class PageLayout extends SvelteComponentTyped<PageLayoutProps, PageLayoutEvents, PageLayoutSlots> {
}
export {};
