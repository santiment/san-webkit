export declare const showAcknowledgmentsDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../../core/Dialog/index.js';
declare const AcknowledgmentsDialog: import("svelte").Component<TDialogProps, {}, "">;
type AcknowledgmentsDialog = ReturnType<typeof AcknowledgmentsDialog>;
export default AcknowledgmentsDialog;
