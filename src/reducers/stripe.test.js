import reducer from './stripe';

describe('stripe reducer', () => {
  const state = {
    token: '',
    error: ''
  };

  it('creates stripe token', () => {
    const action = {
      type: 'CREATE_STRIPE_TOKEN',
      payload: {
        token: '1234',
        error: ''
      }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      token: '1234'
    });
  });
});
