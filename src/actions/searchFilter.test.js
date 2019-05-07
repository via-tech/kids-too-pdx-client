import { 
  UPDATE_CATEGORY,
  updateCategory
} from './searchFilter';

describe('search filter actions', () => {
  it('returns action for updating category', () => {
    const action = updateCategory('Art');

    expect(action).toEqual({
      type: UPDATE_CATEGORY,
      payload: 'Art'
    });
  });
});
