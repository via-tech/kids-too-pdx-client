import reducer from './resources';

jest.mock('../services/usersService');

describe('resources reducers', () => {
  const state = {
    orgs: [],
    loading: false
  };

  const orgs = [
    {
      name: 'The Org 1',
      role: 'org'
    },
    {
      name: 'The Org 2',
      role: 'org'
    },
    {
      name: 'The Org 3',
      role: 'org'
    }
  ];

  it('fetches orgs', () => {
    const action = {
      type: 'FETCH_ORGS',
      payload: orgs
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      orgs
    });
  });

  it('pends orgs', () => {
    const action = {
      type: 'FETCH_ORGS_PENDING'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: true
    });
  });

  it('fulfills orgs', () => {
    const action = {
      type: 'FETCH_ORGS_FULFILLED'
    };

    expect(reducer(state, action)).toEqual({
      ...state,
      loading: false
    });
  });
});
