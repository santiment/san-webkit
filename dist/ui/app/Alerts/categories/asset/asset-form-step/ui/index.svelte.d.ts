import type { TBaseSchema } from '../schema.js';
import type { TAlertStep } from '../../../../form-steps/index.svelte.js';
type TProps = {
    step: TAlertStep<TBaseSchema>;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
