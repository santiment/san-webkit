import { type TDialogProps } from '../../../core/Dialog/dialogs.js';
export declare const showFormulaEditorDialog$: () => (props: Omit<TDialogProps<TResult> & {
    index: number;
    formula: null | {
        id: TUUIDv4;
        expr: string;
        name: string;
    };
}, "resolve" | "Controller" | "reject">) => Promise<TResult>;
import { type TUUIDv4 } from '../../../../utils/uuid/index.js';
type TResult = {
    formula: {
        id: TUUIDv4;
        name: string;
        expr: string;
    };
};
type TProps = TDialogProps<TResult> & {
    index: number;
    formula: null | {
        id: TUUIDv4;
        expr: string;
        name: string;
    };
};
declare const FormulaEditorDialog: import("svelte").Component<TProps, {}, "">;
type FormulaEditorDialog = ReturnType<typeof FormulaEditorDialog>;
export default FormulaEditorDialog;
