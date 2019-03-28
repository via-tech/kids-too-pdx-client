import {
  fetchEvents,
  FETCH_EVENTS,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FULFILLED,
  FETCH_EVENTS_REJECTED,
  fetchFilteredEvents,
  FETCH_FILTERED_EVENTS_PENDING,
  FETCH_FILTERED_EVENTS_FULFILLED,
  FETCH_FILTERED_EVENTS_REJECTED,
  FETCH_FILTERED_EVENTS,
  updateFilters,
  UPDATE_FILTERS
} from './events';

jest.mock('../services/eventsService');

describe('actions test', () => {
  it('fetch events', () => {
    const action = fetchEvents();
    expect(action).toEqual({
      type: FETCH_EVENTS,
      pendingType: FETCH_EVENTS_PENDING,
      fulfilledType: FETCH_EVENTS_FULFILLED,
      rejectedType: FETCH_EVENTS_REJECTED,
      payload: expect.any(Promise)
    });
  });

  it('fetches filtered events', () => {
    const action = fetchFilteredEvents({
      ageMin: 12,
      ageMax: 15
    });
    expect(action).toEqual({
      type: FETCH_FILTERED_EVENTS,
      pendingType: FETCH_FILTERED_EVENTS_PENDING,
      fulfilledType: FETCH_FILTERED_EVENTS_FULFILLED,
      rejectedType: FETCH_FILTERED_EVENTS_REJECTED,
      payload: expect.any(Promise)
    });
  });

  it('updates filters', () => {
    const action = updateFilters({
      ageMin: 8,
      ageMax: 15
    });

    expect(action).toEqual({
      type: UPDATE_FILTERS,
      payload: {
        ageMin: 8,
        ageMax: 15
      }
    });
  });
});
