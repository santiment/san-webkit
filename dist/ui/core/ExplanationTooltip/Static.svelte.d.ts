import type { SS } from '../../../utils/state.svelte.js';
import type { ComponentProps, Snippet } from 'svelte';
import Tooltip from '../Tooltip/index.js';
type TProps = {
    contentClass?: string;
    explanation: string | undefined;
    trigger: Snippet<[{
        ref?: SS<HTMLElement | null>;
    }]>;
} & Omit<ComponentProps<typeof Tooltip>, 'children' | 'content'>;
declare const Static: import("svelte").Component<TProps, {}, "">;
type Static = ReturnType<typeof Static>;
export default Static;
