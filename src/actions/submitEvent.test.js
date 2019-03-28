import {
  createEvent,
  CREATE_EVENT,
  CREATE_EVENT_PENDING,
  CREATE_EVENT_FULFILLED,
  CREATE_EVENT_REJECTED,
  updateEventName,
  UPDATE_EVENT_NAME,
  updateDate,
  UPDATE_DATE,
  updateTime,
  UPDATE_TIME,
  updatePrice,
  UPDATE_PRICE,
  updateRr,
  UPDATE_RRATE,
  updateMinAge,
  UPDATE_MINAGE,
  updateMaxAge,
  UPDATE_MAXAGE,
  updateCategory,
  UPDATE_CATEGORY,
  updateDescription,
  UPDATE_DESCRIPTION
} from './submitEvent';

jest.mock('../services/eventsService');

describe('submit event actions', () => {
  it('creates an event', () => {
    const action = createEvent({
      name: 'The event',
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

  it('updates event name', () => {
    const action = updateEventName('The New Name');

    expect(action).toEqual({
      type: UPDATE_EVENT_NAME,
      payload: 'The New Name'
    });
  });

  it('updates event date', () => {
    const action = updateDate(Date.now());

    expect(action).toEqual({
      type: UPDATE_DATE,
      payload: expect.any(Number)
    });
  });

  it('updates time', () => {
    const action = updateTime('2pm');

    expect(action).toEqual({
      type: UPDATE_TIME,
      payload: '2pm'
    });
  });

  it('updates price', () => {
    const action = updatePrice(250);

    expect(action).toEqual({
      type: UPDATE_PRICE,
      payload: 250
    });
  });

  it('updates reduced rate', () => {
    const action = updateRr(false);

    expect(action).toEqual({
      type: UPDATE_RRATE,
      payload: false
    });
  });

  it('updates minimum age', () => {
    const action = updateMinAge(8);

    expect(action).toEqual({
      type: UPDATE_MINAGE,
      payload: 8
    });
  });

  it('updates maximum age', () => {
    const action = updateMaxAge(15);

    expect(action).toEqual({
      type: UPDATE_MAXAGE,
      payload: 15
    });
  });

  it('updates category', () => {
    const action = updateCategory('Art');

    expect(action).toEqual({
      type: UPDATE_CATEGORY,
      payload: 'Art'
    });
  });

  it('updates description', () => {
    const action = updateDescription('It is a whateves event');

    expect(action).toEqual({
      type: UPDATE_DESCRIPTION,
      payload: 'It is a whateves event'
    });
  });
});
