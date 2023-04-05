import { SvelteComponentTyped } from "svelte";
import { CommentsType } from './../../api/comments';
import Comment from './Comment.svelte';
declare const __propDef: {
    props: {
        type: CommentsType;
        commentsFor: SAN.CommentsFor;
        currentUser?: SAN.CurrentUser | null | undefined;
        onNewComment: (commentsFor: SAN.CommentsFor, comments: SAN.Comment[]) => void;
        onAnonComment?: (() => void) | undefined;
        onCommentError?: (() => void) | undefined;
        onCommentsLoaded?: (() => void) | undefined;
        onCommentSubmitted?: ((comment: SAN.Comment) => void) | undefined;
        titleClass?: string | undefined;
        mapComment?: ((comment: SAN.Comment) => SAN.Comment) | undefined;
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
