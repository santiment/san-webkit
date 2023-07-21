export const NULL_ANNUAL_DISCOUNT = {
  discount: null,
  isEligible: false,
}

export const PRO_CURRENT_USER = {
  username: 'test',
  isEligibleForTrial: false,
  subscriptions: [
    {
      cancelAtPeriodEnd: false,
      currentPeriodEnd: '2024-06-15T08:52:43Z',
      id: '63074',
      plan: {
        amount: 52900,
        id: '202',
        interval: 'year',
        name: 'PRO',
        product: {
          id: '2',
        },
      },
      status: 'ACTIVE',
      trialEnd: null,
    },
  ],
}
