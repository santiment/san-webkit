import { SvelteComponentTyped } from "svelte";
export declare enum SHARE_TYPE {
    Watchlist = "watchlist",
    Alert = "alert",
    Chart = "chart"
}
export declare const MEDIA_LINKS: {
    link: string;
    title: string;
    background: string;
}[];
export declare const showShareDialog: (props: any) => Promise<unknown>;
declare const __propDef: {
    props: {
        [x: string]: any;
        shareType: any;
        shareLink: any;
        shareText: any;
        onChangePrivacy?: ((_?: any) => any) | undefined;
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
