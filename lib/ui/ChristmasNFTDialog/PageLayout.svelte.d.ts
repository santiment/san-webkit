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
export type PageLayoutProps = typeof __propDef.props;
export type PageLayoutEvents = typeof __propDef.events;
export type PageLayoutSlots = typeof __propDef.slots;
export default class PageLayout extends SvelteComponentTyped<PageLayoutProps, PageLayoutEvents, PageLayoutSlots> {
}
export {};
