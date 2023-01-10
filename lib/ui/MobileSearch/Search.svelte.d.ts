import { SvelteComponentTyped } from "svelte";
import Asset from './Asset.svelte';
import Trend from './Trend.svelte';
import Insight from './Insight.svelte';
import Person from './Person.svelte';
export declare const TABS_CONTENT: {
    Assets: {
        query: () => Promise<{
            id: number;
            slug: string;
            name: string;
            ticker: string;
        }[]>;
        filter: (searchTerm: any, items: any) => any;
        Component: typeof Asset;
    };
    Trends: {
        query: () => Promise<any[]>;
        filter: (searchTerm: any, items: any) => any;
        Component: typeof Trend;
    };
    Insights: {
        query: () => Promise<{
            id: string;
            title: string;
        }[]>;
        filter: (searchTerm: any) => Promise<{
            id: string;
            title: string;
        }[]>;
        Component: typeof Insight;
    };
    People: {
        query: () => Promise<{
            id: string;
            username: string;
            avatarUrl: string;
        }[]>;
        filter: (searchTerm: any, items: any) => any;
        Component: typeof Person;
    };
};
declare const __propDef: {
    props: {
        show?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type SearchProps = typeof __propDef.props;
export type SearchEvents = typeof __propDef.events;
export type SearchSlots = typeof __propDef.slots;
export default class Search extends SvelteComponentTyped<SearchProps, SearchEvents, SearchSlots> {
}
export {};
