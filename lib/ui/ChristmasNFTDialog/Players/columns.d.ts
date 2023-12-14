import Player from './Player.svelte';
import Signal from './Signal.svelte';
export declare const COLUMNS: ({
    title: string;
    format: (_: any, i: any) => any;
    className: string;
    Component?: undefined;
    valueKey?: undefined;
} | {
    title: string;
    Component: typeof Player;
    valueKey: string;
    format?: undefined;
    className?: undefined;
} | {
    title: string;
    valueKey: string;
    Component: typeof Signal;
    format?: undefined;
    className?: undefined;
})[];
