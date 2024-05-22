import type { ComponentProps } from 'svelte';
import type Svg from './../../../../ui/Svg/svelte';
import { Plan } from './../../../../utils/plans';
export type Suggestion = {
    label: string;
    badge: string;
    badgeIcon: {
        id: ComponentProps<Svg>['id'];
        w: number;
    };
    description: string;
    green?: boolean;
    orange?: boolean;
    blue?: boolean;
};
export type PlanSuggestion = {
    billing?: string;
    discount?: number;
    isUpgrade?: boolean;
    fullAccess?: boolean;
} & {
    [key in Plan]?: Suggestion;
};
export type UserPlan = Exclude<SAN.Customer['subscription'], null | undefined>['plan'];
export declare function getBusinessSuggestions(userPlan: UserPlan | null): PlanSuggestion[];
export declare function getIndividualSuggestions(userPlan: null | UserPlan, annualDiscount: SAN.Customer['annualDiscount']): PlanSuggestion[];
