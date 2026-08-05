export declare const showInfoDialog$: () => (props: Omit<{
    class?: string;
    title: string;
    children: Snippet;
} & TDialogProps, "resolve" | "reject" | "Controller">) => Promise<undefined>;
import type { Snippet } from 'svelte';
import { type TDialogProps } from '../../core/Dialog/index.js';
type TProps = {
    class?: string;
    title: string;
    children: Snippet;
} & TDialogProps;
declare const InfoDialog: import("svelte").Component<TProps, {}, "">;
type InfoDialog = ReturnType<typeof InfoDialog>;
export default InfoDialog;
