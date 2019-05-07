import reducer from './searchFilter';

describe('search filter reducers', () => {
  const state = {
    category: 'All'
  };

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
});
