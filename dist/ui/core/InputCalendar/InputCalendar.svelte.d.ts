type TProps = {
    date: [Date, Date];
    onChange: (date: [Date, Date]) => void;
};
declare const InputCalendar: import("svelte").Component<TProps, {}, "">;
type InputCalendar = ReturnType<typeof InputCalendar>;
export default InputCalendar;
