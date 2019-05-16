import { getToken } from './session';

describe('session selector', () => {
  const state = {
    session: {
      token: '1234'
    }
  };

  it('gets token', () => expect(getToken(state)).toEqual('1234'));
});
