import { SvelteComponentTyped } from "svelte";
type OnSubmit = (value: string) => Promise<SAN.Comment>;
type Props = {
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
export type CommentFormDialogProps = typeof __propDef.props;
export type CommentFormDialogEvents = typeof __propDef.events;
export type CommentFormDialogSlots = typeof __propDef.slots;
export default class CommentFormDialog extends SvelteComponentTyped<CommentFormDialogProps, CommentFormDialogEvents, CommentFormDialogSlots> {
}
export {};
