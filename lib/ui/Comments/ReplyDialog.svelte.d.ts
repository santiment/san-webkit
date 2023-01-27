import { SvelteComponentTyped } from "svelte";
import type { CommentsType } from './../../api/comments';
export declare function showCommentReplyDialog(entityId: number, parentId: number, type: CommentsType): Promise<SAN.Comment | undefined>;
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ReplyDialogProps = typeof __propDef.props;
export declare type ReplyDialogEvents = typeof __propDef.events;
export declare type ReplyDialogSlots = typeof __propDef.slots;
export default class ReplyDialog extends SvelteComponentTyped<ReplyDialogProps, ReplyDialogEvents, ReplyDialogSlots> {
}
export {};
