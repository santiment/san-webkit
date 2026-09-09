type TProps = {
    selected: string | null;
    slugs: string[];
    onSelect: (slug: string) => void;
};
declare const SelectAsset: import("svelte").Component<TProps, {}, "">;
type SelectAsset = ReturnType<typeof SelectAsset>;
export default SelectAsset;
