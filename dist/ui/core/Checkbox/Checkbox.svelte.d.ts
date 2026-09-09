import { Checkbox, type CheckboxRootProps } from 'bits-ui';
type TProps = CheckboxRootProps & {
    isActive?: boolean;
    class?: string;
    error?: string;
};
declare const Checkbox: import("svelte").Component<TProps, {}, "error" | "indeterminate" | "isActive">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
