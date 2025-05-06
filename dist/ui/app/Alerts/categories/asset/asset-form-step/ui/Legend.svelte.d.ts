import type { TBaseSchema } from '../schema.js';
import type { TAlertStep } from '../../../../form-steps/index.svelte.js';
type TProps = {
    step: TAlertStep<TBaseSchema>;
};
declare const Legend: import("svelte").Component<TProps, {}, "">;
type Legend = ReturnType<typeof Legend>;
export default Legend;
