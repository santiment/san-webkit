import { Calendar } from 'bits-ui';
import { type DateValue } from '@internationalized/date';
type TProps = {
    range: readonly [DateValue, DateValue];
    targetCursor: 0 | 1;
    timeZone: string;
    onSelect: (date: Date) => void;
};
declare const Calendar: import("svelte").Component<TProps, {}, "">;
type Calendar = ReturnType<typeof Calendar>;
export default Calendar;
