type TProps = {
    color: string;
    suggestions?: string[];
    onChange: (color: string) => void;
};
declare const ColorPicker: import("svelte").Component<TProps, {}, "">;
type ColorPicker = ReturnType<typeof ColorPicker>;
export default ColorPicker;
