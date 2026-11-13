import type { TBaseState } from '../../../../form-steps/index.svelte.js';
import type { TBaseSchema } from '../schema.js';
type TProps = {
    state: TBaseState<TBaseSchema>;
};
declare const Legend: import("svelte").Component<TProps, {}, "">;
type Legend = ReturnType<typeof Legend>;
export default Legend;
