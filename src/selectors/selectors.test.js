import { getEvents } from './events';

describe('selectors test', () => {
  it('can get events', () => {
    const state = {
      events: [{
        name: 'Funday'
      }]
    };

    const events = getEvents(state);

    expect(events).toEqual([{
      name: 'Funday'
    }]);
  });
});
