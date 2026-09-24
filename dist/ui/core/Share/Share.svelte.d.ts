type TProps = {
    getLink: () => Promise<string>;
    class?: string;
    source?: string;
    feature?: string;
};
declare const Share: import("svelte").Component<TProps, {}, "">;
type Share = ReturnType<typeof Share>;
export default Share;
