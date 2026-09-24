import type { DateValue } from '@internationalized/date';
export declare const createPlaceholder: (getDefault: () => DateValue) => {
    date: DateValue;
};
export declare const formatMonth: (month: number) => string;
