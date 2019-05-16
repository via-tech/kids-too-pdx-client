import { setSession } from './session';

jest.mock('../services/eventsService');

describe('session actions', () => {
  it('returns action for setSession', () => {
    const action = setSession({
      username: 'org2',
      password: 'org2pass'
    });

    expect(action).toEqual({
      type: 'SET_SESSION',
      payload: expect.any(Promise),
      pendingType: 'SET_SESSION_PENDING',
      fulfilledType: 'SET_SESSION_FULFILLED',
      rejectedType: 'SET_SESSION_REJECTED'
    });
  });
});
