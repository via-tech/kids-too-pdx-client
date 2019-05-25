import { seedTestData, deleteTestData } from './seedTestData';

import {
  getEvents,
  getEvent,
  getFilteredEvents,
  patchEvent,
  signIn,
  patchUser,
  getOrgs
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

  it('posts events', () => expect(events).toHaveLength(5));

  it('gets events', () =>
    getEvents()
      .then(events => expect(events).toBeDefined())
  );

  it('gets an event by id', () => {
    getEvent(events[0]._id)
      .then(event => expect(event).toEqual({
        _id: events[0]._id,
        user: user.user._id,
        image: expect.any(String),
        name: 'The Event 1',
        ageMin: 8,
        ageMax: 12,
        category: 'Art',
        liability: true
      }));
  });

  it('gets filtered event', () => {
    const filters = {
      category: 'Education',
      ageMin: 14,
      ageMax: 25
    };

    getFilteredEvents(filters)
      .then(filteredEvents => expect(filteredEvents).toEqual([{
        _id: events[3]._id,
        user: user.user._id,
        image: expect.any(String),
        name: 'The Event 4',
        ageMin: 15,
        ageMax: 20,
        category: 'Education',
        liability: true
      }]));
  });

  it('patches an event', () => {
    const updatedEvent = {
      _id: events[4]._id,
      token: user.token,
      category: 'Music'
    };

    patchEvent(updatedEvent)
      .then(patchedEvent => expect(patchedEvent).toEqual({
        image: expect.any(String),
        _id: events[4]._id,
        name: 'The Event 5',
        ageMin: 8,
        ageMax: 12,
        category: 'Music',
        liability: true,
        user: user.user._id
      }));
  });

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

  it('patches a user', () => {
    const updatedUser = {
      _id: user.user._id,
      token: user.token,
      email: 'theorg123@org.com'
    };

    patchUser(updatedUser)
      .then(patchedUser => expect(patchedUser).toEqual({
        ...user.user,
        email: 'theorg123@org.com'
      }));
  });

  it('gets a list of all organizations', () =>
    getOrgs()
      .then(orgs => expect(orgs).toBeDefined())
  );
});
