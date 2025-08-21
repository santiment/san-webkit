import { Checkbox, type CheckboxRootProps } from 'bits-ui';
type TProps = CheckboxRootProps & {
    isActive?: boolean;
    class?: string;
    error?: boolean;
};
declare const Checkbox: import("svelte").Component<TProps, {}, "indeterminate" | "isActive">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
