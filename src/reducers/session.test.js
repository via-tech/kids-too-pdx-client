import reducer from './session';

jest.mock('../services/eventsService');

describe('session reducer', () => {
  const state = {
    token: ''
  };

  it('sets session', () => {
    const action = {
      type: 'SET_SESSION',
      payload: '1234'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      token: '1234'
    });
  });
});
