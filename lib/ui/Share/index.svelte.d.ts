import { SvelteComponentTyped } from "svelte";
export declare const showShareDialog: (props: any) => Promise<unknown> | undefined;
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        entity?: string | undefined;
        data?: {} | undefined;
        isAuthor?: boolean | undefined;
        isPublic?: boolean | undefined;
        onPublicityToggle?: (() => void) | undefined;
        feature: any;
        source: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IndexProps = typeof __propDef.props;
export type IndexEvents = typeof __propDef.events;
export type IndexSlots = typeof __propDef.slots;
export default class Index extends SvelteComponentTyped<IndexProps, IndexEvents, IndexSlots> {
}
export {};
