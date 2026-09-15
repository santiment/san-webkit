type TProps = {
    dates: [Date, Date];
    buttonClass?: string;
    rootClass?: string;
    onChange: (dates: [Date, Date]) => void;
};
declare const Index: import("svelte").Component<TProps, {}, "">;
type Index = ReturnType<typeof Index>;
export default Index;
