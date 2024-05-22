import { SvelteComponentTyped } from "svelte";
import type { PlanSuggestion } from './suggestions';
declare const __propDef: {
    props: {
        suggestions: PlanSuggestion[];
        plans: SAN.Plan[];
        isEligibleForTrial?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type PlanSuggestionsProps = typeof __propDef.props;
export type PlanSuggestionsEvents = typeof __propDef.events;
export type PlanSuggestionsSlots = typeof __propDef.slots;
export default class PlanSuggestions extends SvelteComponentTyped<PlanSuggestionsProps, PlanSuggestionsEvents, PlanSuggestionsSlots> {
}
export {};
