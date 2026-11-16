import type { DateValue } from '@internationalized/date';
import type { Month } from 'bits-ui';
type Props = {
    range?: boolean;
    months: Month<DateValue>[];
    weekdays: string[];
};
declare const CalendarBody: import("svelte").Component<Props, {}, "">;
type CalendarBody = ReturnType<typeof CalendarBody>;
export default CalendarBody;
