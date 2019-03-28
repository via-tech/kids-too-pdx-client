import reducer from './eventDetail';

jest.mock('../services/eventsService');

describe('event detail reducers', () => {
  let state = {
    loading: false,
    event: {
      name: 'The Event',
      price: 200
    }
  };

  it('fetches event detail', () => {
    const action = {
      type: 'FETCH_EVENT_DETAIL',
      payload: {
        name: 'The Event',
        price: 200,
        description: 'A great event!'
      }
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      event: {
        name: 'The Event',
        price: 200,
        description: 'A great event!'
      },
      loading: false
    });
  });

  it('pends fetching detail', () => {
    const action = {
      type: 'FETCH_EVENT_DETAIL_PENDING'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: true
    });
  });
});
