import { seedTestData, deleteTestData } from './seedTestData';
import {
  getEvents,
  getEvent,
  getFilteredEvents,
  patchEvent
} from './eventsService';

jest.mock('./request.js');

describe('eventsService', () => {
  let org = null;
  let events = null;

  beforeAll(done =>
    seedTestData()
      .then(({ createdOrg, createdEvents }) => {
        org = createdOrg;
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
        user: org.user._id,
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
        user: org.user._id,
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
      token: org.token,
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
        user: org.user._id
      }));
  });
});
