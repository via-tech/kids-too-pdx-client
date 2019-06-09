import {
  signUpSession,
  signInSession,
  updateUser
} from './session';

jest.mock('../services/request');

describe('session actions', () => {
  it('returns action for signUpSession', () => {
    const action = signUpSession({
      username: 'org2',
      password: 'org2pass'
    });

    expect(action).toEqual({
      type: 'SIGN_UP_SESSION',
      payload: expect.any(Promise),
      fulfilledType: 'SIGN_UP_SESSION_FULFILLED',
      pendingType: 'SIGN_UP_SESSION_PENDING',
      rejectedType: 'SIGN_UP_SESSION_REJECTED'
    });
  });

  it('returns action for signInSession', () => {
    const action = signInSession({
      username: 'org2',
      password: 'org2pass'
    });

    expect(action).toEqual({
      type: 'SIGN_IN_SESSION',
      payload: expect.any(Promise),
      fulfilledType: 'SIGN_IN_SESSION_FULFILLED',
      pendingType: 'SIGN_IN_SESSION_PENDING',
      rejectedType: 'SIGN_IN_SESSION_REJECTED'
    });
  });

  it('returns action for updateUser', () => {
    const action = updateUser({
      username: 'org',
      password: 'orgpass'
    });

    expect(action).toEqual({
      type: 'UPDATE_USER',
      payload: {
        username: 'org',
        password: 'orgpass'
      }
    });
  });
});
