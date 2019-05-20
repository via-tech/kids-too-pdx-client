import reducer from './session';

jest.mock('../services/eventsService');

describe('session reducer', () => {
  const state = {
    token: ''
  };

  it('sets session on sign up', () => {
    const action = {
      type: 'SIGN_UP_SESSION',
      payload: { token: '1234' }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      token: '1234'
    });
  });

  it('sets session on sign in', () => {
    const action = {
      type: 'SIGN_IN_SESSION',
      payload: { token: '5678' }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      token: '5678'
    });
  });
});
