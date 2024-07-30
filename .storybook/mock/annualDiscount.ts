import { getTodaysEnd } from '../../src/lib/utils/dates'

export type AnnualDiscount = null | 35 | 50

export function mockAnnualDiscount(annualDiscount: AnnualDiscount) {
  if (annualDiscount === null) {
    return {
      discount: null,
      isEligible: false,
    }
  }

  return {
    isEligible: true,
    discount: {
      percentOff: annualDiscount,
      expireAt: getTodaysEnd().toISOString(),
    },
  }
}

export const ANNUAL_DISCOUNT_MOCK = {
  name: 'annualDiscount',
  apiQuery: 'checkAnnualDiscountEligibility',
  mock: mockAnnualDiscount,
} as const
