import type { TAsset } from '../../../ctx/assets/api.js';
type TProps = {
    selected?: Set<string>;
    onSelect: (slug: string) => void;
    resetSelections?: () => void;
    hasSearch?: boolean;
    hasResetButton?: boolean;
    keepSelectedInList?: boolean;
    recents?: TAsset[];
};
declare const Multi: import("svelte").Component<TProps, {}, "">;
type Multi = ReturnType<typeof Multi>;
export default Multi;
