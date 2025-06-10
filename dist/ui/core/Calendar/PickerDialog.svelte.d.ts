export declare const showPickerDialog$: () => (props: Omit<TDialogProps & {
    class?: string;
    date: Date;
    timeZone: string;
    minValue?: import("@internationalized/date").DateValue;
    maxValue?: import("@internationalized/date").DateValue;
    onChange?: (date: Date) => void;
}, "resolve" | "Controller" | "reject">) => Promise<undefined>;
import type { ComponentProps } from 'svelte';
import { type TDialogProps } from '../Dialog/dialogs.js';
import Calendar from './Calendar.svelte';
type $$ComponentProps = TDialogProps & ComponentProps<typeof Calendar>;
declare const PickerDialog: import("svelte").Component<$$ComponentProps, {}, "">;
type PickerDialog = ReturnType<typeof PickerDialog>;
export default PickerDialog;
