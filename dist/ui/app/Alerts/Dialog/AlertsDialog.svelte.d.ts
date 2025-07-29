export declare const showAlertsDialog$: () => (() => Promise<undefined>) & ((props: Omit<TDialogProps & {
    source?: string;
    alert?: null | Partial<TApiAlert>;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>);
import { type TDialogProps } from '../../../core/Dialog/index.js';
import { type TApiAlert } from '../types.js';
type TProps = TDialogProps & {
    source?: string;
    alert?: null | Partial<TApiAlert>;
};
declare const AlertsDialog: import("svelte").Component<TProps, {}, "">;
type AlertsDialog = ReturnType<typeof AlertsDialog>;
export default AlertsDialog;
