import reducer from './events';

jest.mock('../services/eventsService');

describe('events reducers', () => {
  const state = {
    events: [],
    loading: false,
    filters: {}
  };

  const events = [
    {
      venue: 'The Event',
      price: 200
    },
    {
      venue: 'The Other Event',
      price: 300
    },
    {
      venue: 'The Other Other Event',
      price: 400
    }
  ];

  it('fetches filtered events', () => {
    const action = {
      type: 'FETCH_FILTERED_EVENTS',
      payload: events
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      events
    });
  });

  it('fetches events', () => {
    const action = {
      type: 'FETCH_EVENTS',
      payload: events
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      events
    });
  });

  it('pends filtered events', () => {
    const action = {
      type: 'FETCH_FILTERED_EVENTS_PENDING'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: true
    });
  });

  it('pends events', () => {
    const action = {
      type: 'FETCH_EVENTS_PENDING'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: true
    });
  });

  it('fulfills filtered events', () => {
    const action = {
      type: 'FETCH_FILTERED_EVENTS_FULFILLED'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false
    });
  });

  it('fulfills events', () => {
    const action = {
      type: 'FETCH_EVENTS_FULFILLED'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false
    });
  });

  it('updates filters', () => {
    const action = {
      type: 'UPDATE_FILTERS',
      payload: {
        ageMin: 2,
        ageMax: 15
      }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      filters: {
        ageMin: 2,
        ageMax: 15
      }
    });
  });
});
