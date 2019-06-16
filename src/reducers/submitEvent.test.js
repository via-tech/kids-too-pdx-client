import reducer from './submitEvent';

jest.mock('../services/eventsService');

describe('Submit Event reducers', () => {
  const state = {
    event: {
      name: 'The Event',
      price: 200
    }
  };

  it('updates event', () => {
    const action = {
      type: 'UPDATE_EVENT',
      payload: {
        contact: {
          contactName: 'Joe',
          email: 'joe@email.com',
          phone: '555-123-4567'
        },
        time: '2pm',
        minAge: 5,
        maxAge: 12,
        category: 'Art',
        description: 'The bestest event ever!!'
      }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      event: {
        name: 'The Event',
        price: 200,
        contact: {
          contactName: 'Joe',
          email: 'joe@email.com',
          phone: '555-123-4567'
        },
        time: '2pm',
        minAge: 5,
        maxAge: 12,
        category: 'Art',
        description: 'The bestest event ever!!'
      }
    });
  });

  it('resets state after creating event', () => {
    const action = { type: 'CREATE_EVENT' };
    
    expect(reducer(state, action)).toEqual({ event: {} });
  });
});
