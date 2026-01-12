import type { TAsset } from '../../../ctx/assets/api.js';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
type TProps = {
    class?: string;
    item: TAsset;
    isActive?: boolean;
    children?: Snippet;
    onclick?: HTMLAttributes<HTMLButtonElement>['onclick'];
};
declare const AssetItem: import("svelte").Component<TProps, {}, "">;
type AssetItem = ReturnType<typeof AssetItem>;
export default AssetItem;
