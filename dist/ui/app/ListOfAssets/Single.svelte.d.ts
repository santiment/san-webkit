type TProps = {
    selected?: string;
    onSelect: (slug: string) => void;
};
declare const Single: import("svelte").Component<TProps, {}, "">;
type Single = ReturnType<typeof Single>;
export default Single;
