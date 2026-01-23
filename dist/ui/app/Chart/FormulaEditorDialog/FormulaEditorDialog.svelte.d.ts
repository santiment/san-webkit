import { type TDialogProps } from '../../../core/Dialog/dialogs.js';
export declare const showFormulaEditorDialog$: () => (props: Omit<TDialogProps<TResult> & {
    index: number;
    formula: null | TMetricFormula;
}, "resolve" | "Controller" | "reject">) => Promise<TResult>;
import type { TMetricFormula } from '../../../../ctx/metrics-registry/types/index.js';
type TResult = {
    formula: TMetricFormula;
};
type TProps = TDialogProps<TResult> & {
    index: number;
    formula: null | TMetricFormula;
};
declare const FormulaEditorDialog: import("svelte").Component<TProps, {}, "">;
type FormulaEditorDialog = ReturnType<typeof FormulaEditorDialog>;
export default FormulaEditorDialog;
