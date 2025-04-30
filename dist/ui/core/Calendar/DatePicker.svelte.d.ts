import type { ComponentProps, Snippet } from 'svelte';
import Popover from '../Popover/index.js';
import Button from '../Button/index.js';
type TCommonProps = {
    as?: ComponentProps<typeof Button>['as'];
    class?: string;
    minDate?: Date;
    maxDate?: Date;
    timeZone?: string;
    children?: Snippet;
    popoverRootProps?: ComponentProps<typeof Popover>['rootProps'];
    popoverContentProps?: ComponentProps<typeof Popover>['contentProps'];
    popoverIsOpened?: boolean;
};
type TSingleProps = {
    date: Date;
    onChange?: (date: Date) => void;
    withPresets?: never;
};
type TRangeProps = {
    date: [Date, Date];
    onChange?: (date: [Date, Date]) => void;
    withPresets?: boolean;
};
type TProps = TCommonProps & (TSingleProps | TRangeProps);
declare const DatePicker: import("svelte").Component<TProps, {}, "popoverIsOpened">;
type DatePicker = ReturnType<typeof DatePicker>;
export default DatePicker;
