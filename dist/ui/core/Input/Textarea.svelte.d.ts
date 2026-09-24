import type { ComponentProps } from 'svelte';
import UniversalInput from './UniversalInput.svelte';
type TProps = Omit<Extract<ComponentProps<typeof UniversalInput>, {
    as: 'textarea';
}>, 'as'>;
declare const Textarea: import("svelte").Component<TProps, {}, "">;
type Textarea = ReturnType<typeof Textarea>;
export default Textarea;
