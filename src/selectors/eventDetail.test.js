import {
  getEventDetail,
  isEventLoading
} from './eventDetail';

describe('eventDetail selectors', () => {
  const state = {
    event: {
      event: {
        name: 'The House Event',
        venue: 'My House'
      },

      loading: false
    }
  };

  it('gets the event detail', () => {
    expect(getEventDetail(state)).toEqual({
      name: 'The House Event',
      venue: 'My House'
    });
  });

  it('checks if loading', () => {
    expect(isEventLoading(state)).toEqual(false);
  });
});
