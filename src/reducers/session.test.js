import reducer from './session';

jest.mock('../services/request');
jest.mock('../services/usersService');

describe('session reducer', () => {
  const state = {
    user: {},
    token: '',
    error: null,
    confirmation: false
  };

  it('sets session on sign up', () => {
    const action = {
      type: 'SIGN_UP_SESSION',
      payload: { token: '1234' }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      token: '1234',
      confirmation: true
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

  it('updates user', () => {
    const action = {
      type: 'UPDATE_USER',
      payload: {
        username: 'org',
        password: 'pass'
      }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      user: {
        username: 'org',
        password: 'pass'
      }
    });
  });

  it('signs out user', () => {
    const action = {
      type: 'SIGN_OUT_SESSION'
    };

    const newState = {
      ...state,
      token: '12345'
    };

    expect(reducer(newState, action)).toEqual({
      ...state,
      token: ''
    });
  });

  it('sets session on rea-activation', () => {
    const action = {
      type: 'ACTIVATE_SESSION',
      payload: { token: '1234' }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      token: '1234',
      confirmation: true
    });
  });
});
