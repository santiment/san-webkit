import { Billing, Plan } from '@/utils/plans';
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
    const suggestions = [];
    if (annualDiscount.isEligible) {
        const suggestion = {
            discount: annualDiscount.percent,
            billing: Billing.YEAR,
        };
        suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.PRO]: PRO_SUGGESTION }));
        if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO) {
            suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.PRO_PLUS]: PRO_PLUS_SUGGESTION }));
        }
        return suggestions;
    }
    if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO_PLUS) {
        return [{ fullAccess: true }];
    }
    const suggestion = {
        billing: (userPlan === null || userPlan === void 0 ? void 0 : userPlan.interval) || Billing.MONTH,
    };
    if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) !== Plan.PRO) {
        suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.PRO]: PRO_SUGGESTION }));
    }
    suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.PRO_PLUS]: PRO_PLUS_SUGGESTION, isUpgrade: (userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO }));
    return suggestions;
}
//# sourceMappingURL=suggestions.js.map