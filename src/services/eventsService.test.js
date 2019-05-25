import { seedTestData, deleteTestData } from './seedTestData';

import {
  getEvents,
  signIn
} from './eventsService';

jest.mock('./request.js');

describe('request', () => {
  let user = null;
  let events = null;

  beforeAll(done =>
    seedTestData()
      .then(({ createdUser, createdEvents }) => {
        user = createdUser;
        events = createdEvents;
        done();
      })
  );

  afterAll(() => deleteTestData());

  it('gets events', () =>
    getEvents()
      .then(events => expect(events).toBeDefined())
  );

  it('signs up an organization', () => {
    expect(user).toEqual({
      user: {
        _id: expect.any(String),
        username: 'theOrg123',
        role: 'org',
        name: 'The Org',
        email: 'theorg123@email.com',
        phone: '5551234567',
        address: {
          street: '123 Main St.',
          city: 'Portland',
          state: 'OR',
          zipcode: '97203'
        }
      },
      token: expect.any(String)
    });
  });

  it('signs in an organization', () =>
    signIn({ username: 'theOrg123', password: 'passit' })
      .then(signedUser => expect(signedUser).toEqual({
        ...user,
        token: expect.any(String)
      }))
  );

  it('posts events', () => expect(events).toHaveLength(5));
});
