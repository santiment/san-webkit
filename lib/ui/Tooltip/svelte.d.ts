import type { Align, Position } from './utils';
export { default } from './index.svelte';
export type Props = {
    /** Tooltip's class name */
    className?: string;
    /** Enabling/disabling tooltip triggering */
    isEnabled?: boolean;
    isOpened?: boolean;
    /** Trigger's class name when tooltip is opened */
    activeClass?: string;
    /**
     * @default 'bottom'
     */
    position?: Position;
    /**
     * @default 'start'
     */
    align?: Align;
    /**
     * @default 'mouseenter'
     */
    on?: 'mouseenter' | 'click';
    /**
     * Duration of the fade-in/out of the tooltip
     * @default 150
     */
    duration?: number;
    openDelay?: number;
    /**
     * Time until tooltip closing after pointer leaves trigger/tooltip
     * @default 120
     */
    closeTimeout?: number;
    /** Dark themed tooltip */
    dark?: boolean;
};
