import { SvelteComponentTyped } from "svelte";
import type { CommentsType } from './../../api/comments';
declare const __propDef: {
    props: {
        type: CommentsType;
        commentsFor: SAN.CommentsFor;
        comment: SAN.Comment;
        authorId: number;
        currentUser?: SAN.CurrentUser | null | undefined;
        updateComments: any;
        scrollToNewComment: () => void;
        commentsNode: HTMLDivElement;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CommentProps = typeof __propDef.props;
export declare type CommentEvents = typeof __propDef.events;
export declare type CommentSlots = typeof __propDef.slots;
export default class Comment extends SvelteComponentTyped<CommentProps, CommentEvents, CommentSlots> {
}
export {};
