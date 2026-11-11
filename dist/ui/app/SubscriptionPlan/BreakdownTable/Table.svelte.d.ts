import type { Snippet } from 'svelte';
import { CONSUMER_PLANS_BREAKDOWN, BUSINESS_PLANS_BREAKDOWN } from './breakdown.js';
type $$ComponentProps = {
    source?: string;
    plans: Record<string, any>[];
    breakdown: typeof CONSUMER_PLANS_BREAKDOWN | typeof BUSINESS_PLANS_BREAKDOWN;
    children: Snippet;
};
declare const Table: import("svelte").Component<$$ComponentProps, {}, "">;
type Table = ReturnType<typeof Table>;
export default Table;
