import type { TConditionsState } from '../schema.js';
import type { Snippet } from 'svelte';
type TProps = {
    conditions: TConditionsState;
    metric: string | null;
    updateConditions: (conditions: TConditionsState) => void;
    children?: Snippet;
    info?: Snippet;
};
declare const Conditions: import("svelte").Component<TProps, {}, "">;
type Conditions = ReturnType<typeof Conditions>;
export default Conditions;
