import {
  getStripeToken,
  getError
} from './stripe';

describe('stripe selector', () => {
  const state = {
    stripe: {
      token: '12345',
      error: 'Invalid card info'
    }
  };

  it('gets stripe token', () => expect(getStripeToken(state)).toEqual('12345'));

  it('gets error', () => expect(getError(state)).toEqual('Invalid card info'));
});
