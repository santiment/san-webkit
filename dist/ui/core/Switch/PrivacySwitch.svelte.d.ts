import type { ComponentProps } from 'svelte';
import Switch from './Switch.svelte';
type TProps = Omit<ComponentProps<typeof Switch>, 'icon'>;
declare const PrivacySwitch: import("svelte").Component<TProps, {}, "checked">;
type PrivacySwitch = ReturnType<typeof PrivacySwitch>;
export default PrivacySwitch;
