import {
  fetchEventDetail,
  FETCH_EVENT_DETAIL,
  FETCH_EVENT_DETAIL_PENDING,
  FETCH_EVENT_DETAIL_FULFILLED
} from './eventDetail';

jest.mock('../services/eventsService');

describe('eventDetail actions', () => {
  it('fetches event details', () => {
    const action = fetchEventDetail();

    expect(action).toEqual({
      type: FETCH_EVENT_DETAIL,
      pendingType: FETCH_EVENT_DETAIL_PENDING,
      fulfilledType: FETCH_EVENT_DETAIL_FULFILLED,
      rejectedType: 'FETCH_EVENT_DETAIL_REJECTED',
      payload: expect.any(Promise)
    });
  });
});
