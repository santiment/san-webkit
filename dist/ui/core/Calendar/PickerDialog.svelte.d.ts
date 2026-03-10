export declare const showPickerDialog$: () => (props: Omit<TDialogProps & Omit<{
    class?: string;
    date: Date;
    timeZone: string;
    minValue?: import("@internationalized/date").DateValue;
    maxValue?: import("@internationalized/date").DateValue;
    onChange?: (date: Date) => void;
}, "class"> & {
    class?: string;
    calendarClass?: string;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import type { ComponentProps } from 'svelte';
import { type TDialogProps } from '../Dialog/dialogs.js';
import Calendar from './Calendar.svelte';
type TProps = TDialogProps & Omit<ComponentProps<typeof Calendar>, 'class'> & {
    class?: string;
    calendarClass?: string;
};
declare const PickerDialog: import("svelte").Component<TProps, {}, "">;
type PickerDialog = ReturnType<typeof PickerDialog>;
export default PickerDialog;
