import type { TOnboardingInput } from './types.js';
export type TStepOption = {
    label: string;
    value: string;
    isExclusive?: boolean;
};
export type TStep = {
    title: string;
    description?: string;
    field: keyof TOnboardingInput;
    type: 'radio' | 'multi';
    options: TStepOption[];
};
export declare const STEPS: TStep[];
