import { resetPass } from './forgotPass';

jest.mock('../services/request');

describe('forgotPass actions', () => {
  it('returns action for resetPass', () => {
    const action = resetPass({ username: 'forgetful123' });

    expect(action).toEqual({
      type: 'RESET_PASS',
      payload: expect.any(Promise),
      fulfilledType: 'RESET_PASS_FULFILLED',
      pendingType: 'RESET_PASS_PENDING',
      rejectedType: 'RESET_PASS_REJECTED'
    });
  });
});
