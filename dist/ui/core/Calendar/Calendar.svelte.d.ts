import type { DateValue } from '@internationalized/date';
import { Calendar } from 'bits-ui';
type TProps = {
    class?: string;
    date: Date;
    timeZone: string;
    minValue?: DateValue;
    maxValue?: DateValue;
    onChange?: (date: Date) => void;
};
declare const Calendar: import("svelte").Component<TProps, {}, "">;
type Calendar = ReturnType<typeof Calendar>;
export default Calendar;
