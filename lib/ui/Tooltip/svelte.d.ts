import type { Align, Position } from './utils';
export { default } from './index.svelte';
export declare type Props = {
    className?: string;
    isEnabled?: boolean;
    isOpened?: boolean;
    activeClass?: string;
    position?: Position;
    align?: Align;
    on?: 'mouseenter' | 'click';
    duration?: number;
    openDelay?: number;
    closeTimeout?: number;
    dark?: boolean;
};
