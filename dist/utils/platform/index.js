import { BROWSER } from 'esm-env';
import { MediaQuery } from 'svelte/reactivity';
const platform = BROWSER
    ? // @ts-ignore
        (navigator.userAgentData?.platform ?? navigator.platform)
    : '';
export const isMac = BROWSER ? platform.toLowerCase().includes('mac') : false;
export const isTouchDevice = BROWSER ? !!navigator.maxTouchPoints : false;
export const CMD = isMac ? '⌘' : 'Ctrl';
export const CMD_EVENT_KEY = isMac ? 'Meta' : 'Control';
export const useHoverAvailable = () => new MediaQuery('(hover: hover)');
export const useIsLandscape = () => new MediaQuery('(orientation: landscape)');
