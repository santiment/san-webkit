import { type Snippet } from 'svelte';
type TProps = {
    children?: Snippet<[{
        slug: string;
        explanation: string;
    }]>;
};
declare const SpikeExplanations: import("svelte").Component<TProps, {}, "">;
type SpikeExplanations = ReturnType<typeof SpikeExplanations>;
export default SpikeExplanations;
