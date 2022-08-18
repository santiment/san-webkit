import { Billing, Plan } from './../../../../utils/plans';
export const PRO_SUGGESTION = {
    label: 'Suggested for you',
    badge: 'Popular',
    badgeIcon: { id: 'star-filled', w: 16 },
    green: true,
};
export const PRO_PLUS_SUGGESTION = {
    label: 'Next level',
    badge: 'Advanced',
    badgeIcon: { id: 'rocket-filled', w: 17 },
    orange: true,
};
export function getSuggestions(userPlan, annualDiscount) {
    if (annualDiscount === null || annualDiscount === void 0 ? void 0 : annualDiscount.discount) {
        return {
            discount: annualDiscount.discount.percentOff,
            billing: Billing.YEAR,
        };
    }
    if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO_PLUS) {
        return { fullAccess: true };
    }
    const suggestion = {
        billing: Billing.MONTH,
        [Plan.PRO_PLUS]: PRO_PLUS_SUGGESTION,
    };
    if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) !== Plan.PRO) {
        suggestion[Plan.PRO] = PRO_SUGGESTION;
    }
    else {
        suggestion.isUpgrade = true;
    }
    return suggestion;
}
//# sourceMappingURL=suggestions.js.map