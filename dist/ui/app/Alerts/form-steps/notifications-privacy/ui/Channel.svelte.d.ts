import type { Snippet } from 'svelte';
type TProps = {
    class?: string;
    isActive: boolean | undefined;
    label: string;
    disabled?: boolean;
    onCheckedChange: (value: boolean) => void;
    right: Snippet;
    bottom?: Snippet;
};
declare const Channel: import("svelte").Component<TProps, {}, "">;
type Channel = ReturnType<typeof Channel>;
export default Channel;
