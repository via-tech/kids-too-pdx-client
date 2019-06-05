import {
  getToken,
  getUser
} from './session';

describe('session selector', () => {
  const state = {
    session: {
      token: '1234',
      user: {
        username: 'org',
        password: 'pass'
      }
    }
  };

  it('gets token', () => expect(getToken(state)).toEqual('1234'));

  it('gets user', () => expect(getUser(state)).toEqual({
    username: 'org',
    password: 'pass'
  }));
});
