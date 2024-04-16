import { SvelteComponentTyped } from "svelte";
import type { ComponentProps } from 'svelte';
import ShareDialog from './index.svelte';
export declare const showShareDialog: (props: ComponentProps<ShareDialog>) => Promise<unknown> | undefined;
import Dialog from '../Dialog';
declare const __propDef: {
    props: {
        [x: string]: any;
        title?: string | undefined;
        entity?: string | undefined;
        data?: {
            title?: string | undefined;
            text?: string | undefined;
            link?: string | undefined;
        } | undefined;
        isAuthor?: boolean | undefined;
        isPublic?: boolean | undefined;
        onPublicityToggle?: (() => void) | undefined;
        feature: any;
        source: any;
        DialogCtx: SAN.Dialog.Ctx;
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
