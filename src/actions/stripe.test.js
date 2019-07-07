import { getStripeToken } from './stripe';

jest.mock('../services/stripeService');

describe('stripe actions', () => {
  it('returns action for getStripeToken', () => {
    const action = getStripeToken({
      name: 'Test Org'
    });

    expect(action).toEqual({
      type: 'CREATE_STRIPE_TOKEN',
      payload: expect.any(Promise),
      fulfilledType: 'CREATE_STRIPE_TOKEN_FULFILLED',
      pendingType: 'CREATE_STRIPE_TOKEN_PENDING',
      rejectedType: 'CREATE_STRIPE_TOKEN_REJECTED'
    });
  });
});
