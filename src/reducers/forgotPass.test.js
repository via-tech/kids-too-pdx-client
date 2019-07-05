import reducer from './forgotPass';

jest.mock('../services/request');
jest.mock('../services/usersService');

describe('forgotPass reducer', () => {
  const state = {
    message: '',
    error: ''
  };

  it('resets password on forgot password', () => {
    const action = {
      type: 'RESET_PASS',
      payload: { message: 'Email has been sent' }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      message: 'Email has been sent'
    });
  });

  it('errors on forgot password', () => {
    const action = {
      type: 'RESET_PASS',
      payload: { error: 'You done messed up somewhere!' }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      error: 'You done messed up somewhere!'
    });
  });
});
