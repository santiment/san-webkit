import type { Snippet } from 'svelte';
import type { Action } from 'svelte/action';
type Props = {
    children: Snippet<[{
        tooltipAction: Action;
    }]>;
    explanation: string;
    class?: string;
    offset?: number;
};
declare const CursorFollowing: import("svelte").Component<Props, {}, "">;
type CursorFollowing = ReturnType<typeof CursorFollowing>;
export default CursorFollowing;
