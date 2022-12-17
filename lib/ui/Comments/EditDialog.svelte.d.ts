import { SvelteComponentTyped } from "svelte";
export declare function showCommentEditDialog(comment: SAN.Comment): Promise<SAN.Comment | undefined>;
declare const __propDef: {
    props: Record<string, never>;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type EditDialogProps = typeof __propDef.props;
export declare type EditDialogEvents = typeof __propDef.events;
export declare type EditDialogSlots = typeof __propDef.slots;
export default class EditDialog extends SvelteComponentTyped<EditDialogProps, EditDialogEvents, EditDialogSlots> {
}
export {};
