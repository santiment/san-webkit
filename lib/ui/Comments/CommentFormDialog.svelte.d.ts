import { SvelteComponentTyped } from "svelte";
declare type OnSubmit = (value: string) => Promise<SAN.Comment>;
declare type Props = {
    title: string;
    value?: string;
    label?: string;
    onSubmit: OnSubmit;
};
export declare const showCommentFormDialog: (props: Props) => Promise<SAN.Comment | undefined>;
declare const __propDef: {
    props: {
        [x: string]: any;
        DialogPromise: SAN.DialogController;
        title: string;
        value?: string | undefined;
        label?: string | undefined;
        onSubmit: OnSubmit;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type CommentFormDialogProps = typeof __propDef.props;
export declare type CommentFormDialogEvents = typeof __propDef.events;
export declare type CommentFormDialogSlots = typeof __propDef.slots;
export default class CommentFormDialog extends SvelteComponentTyped<CommentFormDialogProps, CommentFormDialogEvents, CommentFormDialogSlots> {
}
export {};
