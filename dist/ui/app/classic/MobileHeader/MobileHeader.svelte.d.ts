import type { Snippet } from 'svelte';
type $$ComponentProps = {
    title?: string;
    left?: Snippet;
    right?: Snippet;
    share?: Snippet;
    onSearchClick?: () => void;
};
declare const MobileHeader: import("svelte").Component<$$ComponentProps, {}, "">;
type MobileHeader = ReturnType<typeof MobileHeader>;
export default MobileHeader;
