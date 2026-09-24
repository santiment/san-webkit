type TProps = {
    src: string;
    alt?: string;
    scale: number;
    maxScale: number;
    onzoomin: () => void;
    onzoomout: () => void;
    onclose: () => void;
};
declare const Controls: import("svelte").Component<TProps, {}, "">;
type Controls = ReturnType<typeof Controls>;
export default Controls;
