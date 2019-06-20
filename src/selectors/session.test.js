import {
  getToken,
  getUser,
  getError,
  getConfirmation
} from './session';

describe('session selector', () => {
  const state = {
    session: {
      token: '1234',
      user: {
        username: 'org',
        password: 'pass'
      },
      error: 'Bad email or password',
      confirmation: '9999'
    }
  };

  it('gets token', () => expect(getToken(state)).toEqual('1234'));

  it('gets user', () => expect(getUser(state)).toEqual({
    username: 'org',
    password: 'pass'
  }));

  it('gets error', () => expect(getError(state)).toEqual('Bad email or password'));

  it('gets confirmation', () => expect(getConfirmation(state)).toBeDefined());
});
