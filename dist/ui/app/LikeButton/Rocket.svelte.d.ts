type TProps = {
    rocketNode: HTMLElement | undefined;
    class: string;
};
declare const Rocket: import("svelte").Component<TProps, {}, "rocketNode">;
type Rocket = ReturnType<typeof Rocket>;
export default Rocket;
