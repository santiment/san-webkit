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
    maybeGet<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R | undefined;
    get<T, A extends any[], R>(this: (this: T, ...args: A) => R, allCtxs?: Map<string, any>): R;
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
