import type { TAsset } from '../../../ctx/assets/api.js';
import type { ComponentProps } from 'svelte';
import Button from '../../core/Button/Button.svelte';
type TProps = {
    class?: string;
    item: Pick<TAsset, 'slug' | 'name' | 'ticker'>;
    isActive?: boolean;
} & Omit<ComponentProps<typeof Button>, 'class'>;
declare const AssetItem: import("svelte").Component<TProps, {}, "">;
type AssetItem = ReturnType<typeof AssetItem>;
export default AssetItem;
