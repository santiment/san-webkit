export declare const showExpiredSessionDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../../core/Dialog/index.js';
declare const ExpiredSessionDialog: import("svelte").Component<TDialogProps, {}, "">;
type ExpiredSessionDialog = ReturnType<typeof ExpiredSessionDialog>;
export default ExpiredSessionDialog;
