import type { ComponentProps } from 'svelte';
import Area from './Area.svelte';
type TProps = {
    tooltipVisible?: boolean;
    tooltipSyncKey?: string;
    formatTooltipValue?: (value: number) => string;
} & ComponentProps<typeof Area>;
declare const InteractiveArea: import("svelte").Component<TProps, {}, "">;
type InteractiveArea = ReturnType<typeof InteractiveArea>;
export default InteractiveArea;
