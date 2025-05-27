import type { TAsset, TAssetSlug } from '../../../ctx/assets/api.js';
type TProps = {
    selected: Set<TAssetSlug>;
    onSelect: (slug: TAssetSlug) => void;
    resetSelections: () => void;
    hasSearch?: boolean;
    hasResetButton?: boolean;
    keepSelectedInList?: boolean;
    recents?: TAsset[];
};
declare const Multi: import("svelte").Component<TProps, {}, "">;
type Multi = ReturnType<typeof Multi>;
export default Multi;
