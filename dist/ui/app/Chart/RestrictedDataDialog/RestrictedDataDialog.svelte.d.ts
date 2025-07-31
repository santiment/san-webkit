export declare const showRestrictedDataDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../../../core/Dialog/index.js';
declare const RestrictedDataDialog: import("svelte").Component<TDialogProps, {}, "">;
type RestrictedDataDialog = ReturnType<typeof RestrictedDataDialog>;
export default RestrictedDataDialog;
