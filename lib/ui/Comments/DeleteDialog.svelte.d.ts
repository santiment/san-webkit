import { SvelteComponentTyped } from "svelte";
export declare const DELETE_MSG = "The comment has been deleted.";
export declare const showCommentDeleteDialog: (comment: SAN.Comment) => Promise<SAN.Comment | undefined>;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
        comment: SAN.Comment;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type DeleteDialogProps = typeof __propDef.props;
export declare type DeleteDialogEvents = typeof __propDef.events;
export declare type DeleteDialogSlots = typeof __propDef.slots;
export default class DeleteDialog extends SvelteComponentTyped<DeleteDialogProps, DeleteDialogEvents, DeleteDialogSlots> {
}
export {};
