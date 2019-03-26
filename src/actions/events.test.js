import { FETCH_EVENTS, fetchEvents, FETCH_EVENTS_PENDING, FETCH_EVENTS_FULFILLED, FETCH_EVENTS_REJECTED } from './events';
import { getEvents } from '../services/eventsService';

describe('actions test', () => {
  it('fetch events', () => {
    const action = fetchEvents();
    expect(action).toEqual({
      type: FETCH_EVENTS,
      pendingType: FETCH_EVENTS_PENDING,
      fulfilledType: FETCH_EVENTS_FULFILLED,
      rejectedType: FETCH_EVENTS_REJECTED,
      payload: getEvents()
    });
  });
});
