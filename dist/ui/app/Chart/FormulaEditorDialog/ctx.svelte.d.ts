import type { TSanFormulasEditor } from '../../san-formulas/language/editor.js';
import type { TValidateFormulaMessage } from '../metrics-api-worker/types.js';
export declare const useFormulaEditorCtx: (({ index, chartVariables, metrics, onEditorSignatureShown, }: {
    index: number;
    chartVariables: string[];
    metrics: TValidateFormulaMessage["request"]["payload"]["metrics"];
    onEditorSignatureShown: () => void;
}) => {
    formulaEditor: {
        get $(): null | TSanFormulasEditor;
        set $(value: TSanFormulasEditor);
        readonly validation: {
            readonly $: string[];
            readonly isLoading$: boolean;
        };
    };
    hoveredDefinitionIndex: {
        $: number;
    };
    importSanFormulasEditor: () => Promise<typeof import("../../san-formulas/language/editor.js")>;
}) & {
    get: (allCtxs?: Map<string, any>) => {
        formulaEditor: {
            get $(): null | TSanFormulasEditor;
            set $(value: TSanFormulasEditor);
            readonly validation: {
                readonly $: string[];
                readonly isLoading$: boolean;
            };
        };
        hoveredDefinitionIndex: {
            $: number;
        };
        importSanFormulasEditor: () => Promise<typeof import("../../san-formulas/language/editor.js")>;
    };
    set: ({ index, chartVariables, metrics, onEditorSignatureShown, }: {
        index: number;
        chartVariables: string[];
        metrics: TValidateFormulaMessage["request"]["payload"]["metrics"];
        onEditorSignatureShown: () => void;
    }) => {
        formulaEditor: {
            get $(): null | TSanFormulasEditor;
            set $(value: TSanFormulasEditor);
            readonly validation: {
                readonly $: string[];
                readonly isLoading$: boolean;
            };
        };
        hoveredDefinitionIndex: {
            $: number;
        };
        importSanFormulasEditor: () => Promise<typeof import("../../san-formulas/language/editor.js")>;
    };
    __CTX: "webkit_useFormulaEditorCtx";
};
