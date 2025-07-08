import { BUSINESS_PLANS, Billing, Plan, checkIsBusinessPlan, checkIsIndividualPlan, getIsCustomPlan, } from './../../../../utils/plans.js';
const PRO_SUGGESTION = {
    label: 'Suggested for you',
    badge: 'Popular',
    badgeIcon: { id: 'star-filled', w: 16 },
    description: 'Get access to advanced crypto metrics, market insights and more!',
    green: true,
};
const MAX_SUGGESTION = {
    label: 'Next level',
    badge: 'Advanced',
    badgeIcon: { id: 'rocket-filled', w: 17 },
    description: 'Advanced plan with complete access to analytics, backtesting framework.',
    orange: true,
};
const BUSINESS_PRO_SUGGESTION = {
    label: '💼 For Business',
    badge: 'Starter',
    badgeIcon: { id: 'star-filled', w: 16 },
    description: 'The starting point for your business with real-time API calls.',
    blue: true,
};
const BUSINESS_MAX_SUGGESTION = {
    label: '💼 For Business',
    badge: 'Advanced',
    badgeIcon: { id: 'rocket-filled', w: 17 },
    description: 'Business plan for extensive research and strategy testing.',
    blue: true,
};
const ENTERPRISE_SUGGESTION = {
    label: '💼 For Business',
    badge: 'Custom',
    badgeIcon: { id: 'fire-filled', w: 16 },
    description: 'Everything your business needs as a tailored solution.',
    blue: true,
};
const BUSINESS_SUGGESTIONS = {
    [Plan.BUSINESS_PRO]: BUSINESS_PRO_SUGGESTION,
    [Plan.BUSINESS_MAX]: BUSINESS_MAX_SUGGESTION,
    [Plan.CUSTOM]: ENTERPRISE_SUGGESTION,
};
export function getBusinessSuggestions(userPlan) {
    var _a;
    const suggestion = {
        billing: (_a = userPlan === null || userPlan === void 0 ? void 0 : userPlan.interval) !== null && _a !== void 0 ? _a : Billing.MONTH,
    };
    const allBusinessSuggestions = Object.entries(BUSINESS_SUGGESTIONS).map(([plan, planSuggestion]) => (Object.assign(Object.assign({}, suggestion), { [plan]: planSuggestion })));
    if (!userPlan || checkIsIndividualPlan(userPlan))
        return allBusinessSuggestions;
    if (userPlan.name === Plan.BUSINESS_PRO) {
        return allBusinessSuggestions.slice(1);
    }
    const planName = getIsCustomPlan(userPlan.name) ? Plan.CUSTOM : userPlan.name;
    const planIndex = Array.from(BUSINESS_PLANS).indexOf(planName);
    if (planIndex === -1)
        return allBusinessSuggestions;
    if (planIndex >= BUSINESS_PLANS.size - 1)
        return [];
    return allBusinessSuggestions.slice(planIndex + 1);
}
export function getIndividualSuggestions(userPlan, annualDiscount) {
    const suggestions = [];
    if (userPlan && checkIsBusinessPlan(userPlan)) {
        return [];
    }
    if (annualDiscount.isEligible) {
        const suggestion = {
            discount: annualDiscount.percent || 0,
            billing: Billing.YEAR,
        };
        suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.PRO]: PRO_SUGGESTION }));
        if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO) {
            suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.MAX]: MAX_SUGGESTION }));
        }
        return suggestions;
    }
    if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO_PLUS || (userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.MAX) {
        return [{ fullAccess: true }];
    }
    const suggestion = {
        billing: (userPlan === null || userPlan === void 0 ? void 0 : userPlan.interval) || Billing.MONTH,
    };
    if ((userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) !== Plan.PRO) {
        suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.PRO]: PRO_SUGGESTION }));
    }
    suggestions.push(Object.assign(Object.assign({}, suggestion), { [Plan.MAX]: MAX_SUGGESTION, isUpgrade: (userPlan === null || userPlan === void 0 ? void 0 : userPlan.name) === Plan.PRO }));
    return suggestions;
}
//# sourceMappingURL=suggestions.js.map