import type { TAssetSlug } from '../../../../ctx/assets/api.js';
import { type Snippet } from 'svelte';
import { type TSeries } from '../ctx/index.js';
type TProps = {
    metric: TSeries;
    slug?: TAssetSlug;
    children?: Snippet<[{
        slug: string;
        explanation: string;
    }]>;
};
declare const SpikeExplanations: import("svelte").Component<TProps, {}, "">;
type SpikeExplanations = ReturnType<typeof SpikeExplanations>;
export default SpikeExplanations;
