import {
  getEvents,
  isLoading,
  getFilters
} from './events';

describe('events selectors', () => {
  const state = {
    events: {
      events: [
        {
          name: 'The House Event',
          venue: 'My House'
        },
        {
          name: 'The Other House Event',
          venue: 'My Other House'
        },
        {
          name: 'The Other Another House Event',
          venue: 'My Other Another House'
        }
      ],
      loading: true,
      filters: {
        ageMin: 2,
        ageMax: 5
      }
    }
  };

  it('gets events', () => {
    expect(getEvents(state)).toEqual([
      {
        name: 'The House Event',
        venue: 'My House'
      },
      {
        name: 'The Other House Event',
        venue: 'My Other House'
      },
      {
        name: 'The Other Another House Event',
        venue: 'My Other Another House'
      }
    ]);
  });

  it('checks if loading', () => {
    expect(isLoading(state)).toEqual(true);
  });

  it('gets filters', () => {
    expect(getFilters(state)).toEqual({
      ageMin: 2,
      ageMax: 5
    });
  });
});
