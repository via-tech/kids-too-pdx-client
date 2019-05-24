import {
  getEvents,
  signUp
} from './eventsService';

jest.mock('./request.js');

describe('request', () => {
  it('gets events', () => {
    return getEvents()
      .then(events => expect(events).toHaveLength(241));
  });

  it('signs up an organization', () => {
    return signUp({
      username: 'theorg',
      password: 'pass',
      role: 'org',
      name: 'The Org',
      email: 'theorg@org.com',
      phone: '5551234567',
      address: {
        street: '123 Main St.',
        city: 'Portland',
        state: 'OR',
        zipcode: '97203'
      }
    })
      .then(user => console.log('user', user));
  });
});
