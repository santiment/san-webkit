import { SvelteComponentTyped } from "svelte";
import type { SvelteComponentModule } from './dialogs';
import type { DialogCtxType } from './ctx';
declare const __propDef: {
    props: {
        [x: string]: any;
        class?: string | undefined;
        titleClassName?: string | undefined;
        closeDialog?: ((skipLockChecks?: boolean) => void) | undefined;
        title?: string | SvelteComponentModule | undefined;
        onBeforeDialogClose?: (() => void) | undefined;
        noTitle?: boolean | undefined;
        noBg?: boolean | undefined;
        onEditableEscaped?: ((target: HTMLElement, closeDialog: () => void) => void) | null | undefined;
        animated?: boolean | undefined;
        isClickawayDisabled?: boolean | undefined;
        DialogCtx: DialogCtxType;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        title: {};
        default: {
            closeDialog: (skipLockChecks?: boolean) => void;
        };
    };
};
export type DialogProps = typeof __propDef.props;
export type DialogEvents = typeof __propDef.events;
export type DialogSlots = typeof __propDef.slots;
export default class Dialog extends SvelteComponentTyped<DialogProps, DialogEvents, DialogSlots> {
    get closeDialog(): (skipLockChecks?: boolean) => void;
}
export {};
