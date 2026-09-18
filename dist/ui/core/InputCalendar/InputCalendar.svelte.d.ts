type TProps = {
    date: [Date, Date];
    rootClass?: string;
    buttonClass?: string;
    calendarClass?: string;
    inputClass?: string;
    onChange: (date: [Date, Date], timeRange?: string) => void;
};
declare const InputCalendar: import("svelte").Component<TProps, {}, "">;
type InputCalendar = ReturnType<typeof InputCalendar>;
export default InputCalendar;
