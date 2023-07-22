import { getTodaysEnd } from '@/utils/dates'

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
