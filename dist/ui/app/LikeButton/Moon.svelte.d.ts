type TProps = {
    votes: number;
    moonNode: HTMLElement | undefined;
    mooned?: boolean;
};
declare const Moon: import("svelte").Component<TProps, {}, "moonNode">;
type Moon = ReturnType<typeof Moon>;
export default Moon;
