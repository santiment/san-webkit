import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        searchTerm?: string | undefined;
        href?: (({ slug }: {
            slug: any;
        }) => string) | undefined;
        label?: (({ ticker }: {
            ticker: any;
        }) => string) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type AssetsProps = typeof __propDef.props;
export declare type AssetsEvents = typeof __propDef.events;
export declare type AssetsSlots = typeof __propDef.slots;
export default class Assets extends SvelteComponentTyped<AssetsProps, AssetsEvents, AssetsSlots> {
    get href(): ({ slug }: {
        slug: any;
    }) => string;
    get label(): ({ ticker }: {
        ticker: any;
    }) => string;
}
export {};
