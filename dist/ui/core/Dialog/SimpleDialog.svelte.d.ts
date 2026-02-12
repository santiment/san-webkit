import { type TDialogProps } from './dialogs.js';
export declare const showDialog$: () => (props: Omit<{
    class?: string;
    forceMobileLandscape?: boolean;
    children: import("svelte").Snippet<[{
        close: () => void;
    }]>;
} & TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import type { ComponentProps } from 'svelte';
import Dialog from './Dialog.svelte';
type TProps = ComponentProps<typeof Dialog> & TDialogProps;
declare const SimpleDialog: import("svelte").Component<TProps, {}, "">;
type SimpleDialog = ReturnType<typeof SimpleDialog>;
export default SimpleDialog;
