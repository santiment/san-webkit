import type { TAssetSlug } from '../../../ctx/assets/api.js';
type TProps = {
    selected: TAssetSlug | undefined;
    onSelect: (slug: TAssetSlug) => void;
    hasSearch?: boolean;
    hasTabs?: boolean;
};
declare const Single: import("svelte").Component<TProps, {}, "">;
type Single = ReturnType<typeof Single>;
export default Single;
