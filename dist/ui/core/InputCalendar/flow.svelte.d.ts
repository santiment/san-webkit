export declare const getDaysInMonth: (year: any, month: any) => number;
export declare function formatDate(date: Date): string;
export declare function formatValue(dates: [Date, Date] | [Date]): string;
export declare function parseInputData(input: string): [[[string, string, string], [string, string, string]], [Date, Date]];
export declare function useInputCalendar(date: [Date, Date], onDateSelect: (date: [Date, Date]) => void): {
    inputNode: import("svelte-runes").SS<HTMLInputElement>;
    formatValue: typeof formatValue;
    onKeyDown: (e: KeyboardEvent) => void;
    onInput: () => void;
    onClick: () => void;
    onBlur: (callback?: (newState: boolean) => void) => void | undefined;
};
