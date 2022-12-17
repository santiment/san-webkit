import { SvelteComponentTyped } from "svelte";
export declare const getUserInfoTooltip: () => unknown;
export declare const getProfileLinks: (node: HTMLElement) => Element[];
export declare const getUserInfoTooltipHook: () => (node: Element) => any;
import { CommentsType } from './../../../api/comments';
declare const __propDef: {
    props: {
        comments: any[];
        commentsNode: HTMLElement;
        type: CommentsType;
        currentUser: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export declare type UserInfoCtxProps = typeof __propDef.props;
export declare type UserInfoCtxEvents = typeof __propDef.events;
export declare type UserInfoCtxSlots = typeof __propDef.slots;
export default class UserInfoCtx extends SvelteComponentTyped<UserInfoCtxProps, UserInfoCtxEvents, UserInfoCtxSlots> {
}
export {};
