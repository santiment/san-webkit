import { getTodaysEnd } from './../../lib/utils/dates.js';
export function mockAnnualDiscount(annualDiscount) {
    if (annualDiscount === null) {
        return {
            discount: null,
            isEligible: false,
        };
    }
    return {
        isEligible: true,
        discount: {
            percentOff: annualDiscount,
            expireAt: getTodaysEnd().toISOString(),
        },
    };
}
export var ANNUAL_DISCOUNT_MOCK = {
    schema: 'annualDiscount',
    query: 'checkAnnualDiscountEligibility',
    mock: mockAnnualDiscount,
};
