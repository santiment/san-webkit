import type { Snippet } from 'svelte';
type $$ComponentProps = {
    desktop?: boolean;
    tablet?: boolean;
    phone?: boolean;
    children: Snippet;
};
declare const OnlyOnDevice: import("svelte").Component<$$ComponentProps, {}, "">;
type OnlyOnDevice = ReturnType<typeof OnlyOnDevice>;
export default OnlyOnDevice;
