import { SvelteComponentTyped } from "svelte";
import { ComponentProps } from 'svelte';
export declare const getUserInfoTooltip: () => unknown;
export declare const getProfileLinks: (node: HTMLElement) => Element[];
export declare const getUserInfoTooltipHook: () => (node: Element) => any;
import UserInfo from './UserInfo.svelte';
import { CommentsType } from './../../../api/comments';
declare const __propDef: {
    props: {
        comments: any[];
        commentsNode: HTMLElement;
        type: CommentsType;
        currentUser: ComponentProps<UserInfo>['currentUser'];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type UserInfoCtxProps = typeof __propDef.props;
export type UserInfoCtxEvents = typeof __propDef.events;
export type UserInfoCtxSlots = typeof __propDef.slots;
export default class UserInfoCtx extends SvelteComponentTyped<UserInfoCtxProps, UserInfoCtxEvents, UserInfoCtxSlots> {
}
export {};
