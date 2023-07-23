export function mockSavedCard(savedCard) {
    if (savedCard) {
        return { last4: '5467', expMonth: 11, expYear: 25, brand: 'Visa' };
    }
    return {
        error: {
            message: 'Customer has no default payment instrument',
        },
    };
}
export var SAVED_CARD_MOCK = {
    schema: 'savedCard',
    query: 'fetchDefaultPaymentInstrument',
    mock: mockSavedCard,
};
