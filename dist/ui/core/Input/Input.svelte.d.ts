import type { ComponentProps } from 'svelte';
import UniversalInput from './UniversalInput.svelte';
type TProps = Omit<Extract<ComponentProps<typeof UniversalInput>, {
    as: 'input';
}>, 'as'>;
declare const Input: import("svelte").Component<TProps, {}, "">;
type Input = ReturnType<typeof Input>;
export default Input;
