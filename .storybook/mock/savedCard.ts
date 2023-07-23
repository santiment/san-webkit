export function mockSavedCard(savedCard: boolean) {
  if (savedCard) {
    return { last4: '5467', expMonth: 11, expYear: 25, brand: 'Visa' }
  }
}

export const SAVED_CARD_MOCK = {
  schema: 'savedCard',
  query: 'fetchDefaultPaymentInstrument',
  mock: mockSavedCard,
} as const
