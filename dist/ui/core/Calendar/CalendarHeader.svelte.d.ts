import type { DateValue } from '@internationalized/date';
type TProps = {
    range?: boolean;
    placeholder: DateValue;
    minValue?: DateValue;
    maxValue?: DateValue;
};
declare const CalendarHeader: import("svelte").Component<TProps, {}, "placeholder">;
type CalendarHeader = ReturnType<typeof CalendarHeader>;
export default CalendarHeader;
