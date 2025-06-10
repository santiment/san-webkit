import { Checkbox, type CheckboxRootProps } from 'bits-ui';
type TProps = CheckboxRootProps & {
    isActive?: boolean;
    class?: string;
};
declare const Checkbox: import("svelte").Component<TProps, {}, "">;
type Checkbox = ReturnType<typeof Checkbox>;
export default Checkbox;
