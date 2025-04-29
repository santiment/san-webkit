import type { DateValue } from '@internationalized/date';
import { RangeCalendar } from 'bits-ui';
type $$ComponentProps = {
    class?: string;
    date: [Date, Date];
    withPresets?: boolean;
    minValue?: DateValue;
    maxValue?: DateValue;
    timeZone: string;
    onChange?: (dates: [Date, Date]) => void;
};
declare const RangeCalendar: import("svelte").Component<$$ComponentProps, {}, "">;
type RangeCalendar = ReturnType<typeof RangeCalendar>;
export default RangeCalendar;
