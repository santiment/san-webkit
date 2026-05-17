type TScreen = 'intro' | 'question' | 'final';
export declare const useQuestionnaireCtx: (() => {
    questionnaire: {
        $$: {
            screen: TScreen;
            stepIndex: number;
            isSubmitting: boolean;
            isVisible: boolean;
        };
        readonly currentAnswer$: string | string[] | undefined;
        readonly currentStep$: import("./steps.js").TStep;
        readonly isAnswered$: boolean;
        totalSteps: number;
        cancel(): void;
        setRadioAnswer(value: string): void;
        goNext: () => Promise<void>;
        toggleMultiOption: (option: string) => void;
    };
}) & {
    get: (allCtxs?: Map<string, any>) => {
        questionnaire: {
            $$: {
                screen: TScreen;
                stepIndex: number;
                isSubmitting: boolean;
                isVisible: boolean;
            };
            readonly currentAnswer$: string | string[] | undefined;
            readonly currentStep$: import("./steps.js").TStep;
            readonly isAnswered$: boolean;
            totalSteps: number;
            cancel(): void;
            setRadioAnswer(value: string): void;
            goNext: () => Promise<void>;
            toggleMultiOption: (option: string) => void;
        };
    };
    set: () => {
        questionnaire: {
            $$: {
                screen: TScreen;
                stepIndex: number;
                isSubmitting: boolean;
                isVisible: boolean;
            };
            readonly currentAnswer$: string | string[] | undefined;
            readonly currentStep$: import("./steps.js").TStep;
            readonly isAnswered$: boolean;
            totalSteps: number;
            cancel(): void;
            setRadioAnswer(value: string): void;
            goNext: () => Promise<void>;
            toggleMultiOption: (option: string) => void;
        };
    };
    __CTX: "questionnaire_useQuestionnaireCtx";
};
export {};
