import type { TAlertStep } from '../form-steps/index.svelte.js';
type TProps = {
    steps: readonly TAlertStep[];
    selectedIndex: number;
    onStepSelect: (index: number) => void;
};
declare const Steps: import("svelte").Component<TProps, {}, "">;
type Steps = ReturnType<typeof Steps>;
export default Steps;
