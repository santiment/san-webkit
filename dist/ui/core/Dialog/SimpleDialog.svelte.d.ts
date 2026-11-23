import { type TDialogProps } from './dialogs.js';
export declare const showDialog$: () => (props: Omit<{
    class?: string;
    overlayClass?: string;
    forceMobileLandscape?: boolean;
    forceDesktop?: boolean;
    children: import("svelte").Snippet<[{
        close: () => void;
    }]>;
    onBeforeClose?: () => void;
} & TDialogProps, "resolve" | "reject" | "Controller">) => Promise<undefined>;
import type { ComponentProps } from 'svelte';
import Dialog from './Dialog.svelte';
type TProps = ComponentProps<typeof Dialog> & TDialogProps;
declare const SimpleDialog: import("svelte").Component<TProps, {}, "">;
type SimpleDialog = ReturnType<typeof SimpleDialog>;
export default SimpleDialog;
