import {
  fetchOrgs,
  FETCH_ORGS,
  FETCH_ORGS_PENDING,
  FETCH_ORGS_FULFILLED,
  FETCH_ORGS_REJECTED
} from './resources';

jest.mock('../services/usersService');

describe('actions for resources', () => {
  it('fetches resources', () => {
    const action = fetchOrgs();

    expect(action).toEqual({
      type: FETCH_ORGS,
      pendingType: FETCH_ORGS_PENDING,
      fulfilledType: FETCH_ORGS_FULFILLED,
      rejectedType: FETCH_ORGS_REJECTED,
      payload: expect.any(Promise)
    });
  });
});
