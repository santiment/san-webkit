export declare const showCancelSubscriptionDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../../core/Dialog/index.js';
declare const CancelSubscriptionDialog: import("svelte").Component<TDialogProps, {}, "">;
type CancelSubscriptionDialog = ReturnType<typeof CancelSubscriptionDialog>;
export default CancelSubscriptionDialog;
