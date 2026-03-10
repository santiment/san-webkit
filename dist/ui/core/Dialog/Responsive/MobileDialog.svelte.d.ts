import type { Snippet } from 'svelte';
declare const MobileDialog: import("svelte").Component<{
    class?: string;
    onClosed: () => void;
    children: Snippet<[{
        close: (resetStyles?: () => void) => void | {
            duration: number;
        } | null;
    }]>;
}, {}, "">;
type MobileDialog = ReturnType<typeof MobileDialog>;
export default MobileDialog;
