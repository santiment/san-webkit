type TProps = {
    color: string;
    onChange: (color: string) => void;
};
declare const HexInput: import("svelte").Component<TProps, {}, "">;
type HexInput = ReturnType<typeof HexInput>;
export default HexInput;
