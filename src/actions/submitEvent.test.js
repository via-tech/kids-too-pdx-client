import {
  createEvent,
  CREATE_EVENT,
  CREATE_EVENT_PENDING,
  CREATE_EVENT_FULFILLED,
  CREATE_EVENT_REJECTED,
  updateEvent,
  UPDATE_EVENT
} from './submitEvent';

jest.mock('../services/eventsService');

describe('submit event actions', () => {
  it('creates an event', () => {
    const action = createEvent({
      name: 'The Event',
      user: '1234',
      price: 200
    });

    expect(action).toEqual({
      type: CREATE_EVENT,
      pendingType: CREATE_EVENT_PENDING,
      fulfilledType: CREATE_EVENT_FULFILLED,
      rejectedType: CREATE_EVENT_REJECTED,
      payload: expect.any(Promise)
    });
  });

  it('updates event', () => {
    const action = updateEvent({
      name: 'The Event 2',
      user: '5678',
      price: 300
    });

    expect(action).toEqual({
      type: UPDATE_EVENT,
      payload: {
        name: 'The Event 2',
        user: '5678',
        price: 300
      }
    });
  });
});
