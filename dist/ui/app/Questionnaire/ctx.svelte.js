import { Query } from '../../../api/executor.js';
import { createCtx } from '../../../utils/index.js';
import { mutateUserOnboarding } from './api.js';
import { STEPS } from './steps.js';
const initialState = {
    screen: 'intro',
    stepIndex: 0,
    isSubmitting: false,
    isVisible: false,
};
export const useQuestionnaireCtx = createCtx('questionnaire_useQuestionnaireCtx', () => {
    let state = $state({ ...initialState });
    let answers = $state({});
    const currentStep = $derived(STEPS[state.stepIndex]);
    const currentAnswer = $derived(answers[currentStep.field]);
    const isAnswered = $derived(Array.isArray(currentAnswer) ? currentAnswer.length > 0 : !!currentAnswer);
    async function goNext() {
        const isLast = state.stepIndex === STEPS.length - 1;
        if (isLast) {
            state.isSubmitting = true;
            try {
                await mutateUserOnboarding(Query)(answers);
                state.screen = 'final';
            }
            catch (error) {
                console.error(error);
            }
            finally {
                state.isSubmitting = false;
            }
        }
        else {
            state.stepIndex += 1;
        }
    }
    function toggleMultiOption(option) {
        const { field, options } = currentStep;
        const current = answers[field] ?? [];
        const isExclusive = options.find((o) => o.value === option)?.isExclusive;
        if (isExclusive) {
            answers[field] = current.includes(option) ? [] : [option];
        }
        else {
            const exclusiveValues = options.filter((o) => o.isExclusive).map((o) => o.value);
            let next = current.filter((v) => !exclusiveValues.includes(v));
            if (next.includes(option)) {
                next = next.filter((v) => v !== option);
            }
            else {
                next.push(option);
            }
            answers[field] = next;
        }
    }
    return {
        questionnaire: {
            get $$() {
                return state;
            },
            set $$(value) {
                state = value;
            },
            get currentAnswer$() {
                return currentAnswer;
            },
            get currentStep$() {
                return currentStep;
            },
            get isAnswered$() {
                return isAnswered;
            },
            totalSteps: STEPS.length,
            cancel() {
                state = { ...initialState };
                answers = {};
            },
            setRadioAnswer(value) {
                answers[currentStep.field] = value;
            },
            goNext,
            toggleMultiOption,
        },
    };
});
