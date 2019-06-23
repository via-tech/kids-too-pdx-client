import {
  signUpSession,
  signInSession,
  updateUser,
  signOutSession,
  activateSession
} from './session';

jest.mock('../services/request');

describe('session actions', () => {
  it('returns action for signUpSession', () => {
    const action = signUpSession({
      username: 'org2',
      password: 'org2pass',
      confirmPassword: 'org2pass'
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

  it('returns action for signOutSession', () =>
    expect(signOutSession()).toEqual({
      type: 'SIGN_OUT_SESSION'
    }));

  it('returns action for activateSession', () => {
    const org = {
      username: 'theOrg999',
      password: '12345678',
      billStreet: '1223 Main St.',
      billCity: 'Portland',
      billState: 'OR',
      billZipcode: '97203',
      cardNumber: '1234567890123456',
      cardName: 'The Org',
      expMonth: '01',
      expYear: '2020',
      securityCode: '123',
      method: 'visa'
    };

    const action = activateSession(org);

    expect(action).toEqual({
      type: 'ACTIVATE_SESSION',
      payload: expect.any(Promise),
      fulfilledType: 'ACTIVATE_SESSION_FULFILLED',
      pendingType: 'ACTIVATE_SESSION_PENDING',
      rejectedType: 'ACTIVATE_SESSION_REJECTED'
    });
  });
});
