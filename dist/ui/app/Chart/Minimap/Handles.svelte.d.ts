type TProps = {
    minimapWidth: number;
    leftHandleCoordinates: number;
    rightHandleCoordinates: number;
    leftHandleDate: Date;
    rightHandleDate: Date;
    onpointerdown: HTMLButtonElement['onpointerdown'];
};
declare const Handles: import("svelte").Component<TProps, {}, "">;
type Handles = ReturnType<typeof Handles>;
export default Handles;
