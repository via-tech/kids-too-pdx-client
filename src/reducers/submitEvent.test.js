import reducer from './SubmitEvent';

jest.mock('../services/eventsService');

describe('Submit Event reducers', () => {
  const state = {
    contact: {},
    name: '',
    date: Date.now(),
    time: '',
    location: {},
    price: 0,
    reducedRate: true,
    eventInsurace: true,
    minAge: 0,
    maxAge: 0,
    category: '',
    description: ''
  };


  it('creates event', () => {
    const action = {
      type: 'CREATE_EVENT'
    };

    expect(reducer(state, action)).toEqual({
      ...state
    });
  });

  it('updates event name', () => {
    const action = {
      type: 'UPDATE_EVENT_NAME',
      payload: 'Joe'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      name: 'Joe'
    });
  });

  it('updates date', () => {
    const action = {
      type: 'UPDATE_DATE',
      payload: Date.now()
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      date: expect.any(Number)
    });
  });

  it('updates time', () => {
    const action = {
      type: 'UPDATE_TIME',
      payload: '2pm'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      time: '2pm'
    });
  });

  it('updates price', () => {
    const action = {
      type: 'UPDATE_PRICE',
      payload: 150
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      price: 150
    });
  });

  it('updates reduced rate', () => {
    const action = {
      type: 'UPDATE_RRATE',
      payload: false
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      reducedRate: false
    });
  });

  it('updates minimum age', () => {
    const action = {
      type: 'UPDATE_MINAGE',
      payload: 9
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      minAge: 9
    });
  });

  it('updates maximum age', () => {
    const action = {
      type: 'UPDATE_MAXAGE',
      payload: 15
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      maxAge: 15
    });
  });

  it('updates category', () => {
    const action = {
      type: 'UPDATE_CATEGORY',
      payload: 'Art'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      category: 'Art'
    });
  });

  it('updates description', () => {
    const action = {
      type: 'UPDATE_DESCRIPTION',
      payload: 'The bestest event ever!'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      description: 'The bestest event ever!'
    });
  });
});
