import { seedTestData, deleteTestData } from './seedTestData';
import {
  getEvents,
  getEvent,
  getFilteredEvents,
  patchEvent,
  postEvent
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

  it('errors on posting a bad event', done => {
    return postEvent({
      name: 'The Event 5',
      ageMin: 8,
      ageMax: 12,
      category: 'Art',
      liability: false,
      token: org.token
    })
      .then(res => {
        expect(res).toEqual({ error: 'Liability agreement required' });

        done();
      });
  });

  it('gets events', done =>
    getEvents()
      .then(events => {
        expect(events).toBeDefined();

        done();
      })
  );

  it('gets an event by id', done => {
    getEvent(events[0]._id)
      .then(event => {
        expect(event).toEqual({
          _id: events[0]._id,
          user: org.user._id,
          image: expect.any(String),
          name: 'The Event 1',
          ageMin: 8,
          ageMax: 12,
          category: 'Art',
          liability: true
        });

        done();
      });
  });

  it('gets filtered event', done => {
    const filters = {
      category: 'Education',
      ageMin: 14,
      ageMax: 25
    };

    getFilteredEvents(filters)
      .then(filteredEvents => {
        expect(filteredEvents).toEqual([{
          _id: events[3]._id,
          user: org.user._id,
          image: expect.any(String),
          name: 'The Event 4',
          ageMin: 15,
          ageMax: 20,
          category: 'Education',
          liability: true
        }]);

        done();
      });
  });

  it('patches an event', done => {
    const updatedEvent = {
      _id: events[4]._id,
      token: org.token,
      category: 'Music'
    };

    patchEvent(updatedEvent)
      .then(patchedEvent => {
        expect(patchedEvent).toEqual({
          image: expect.any(String),
          _id: events[4]._id,
          name: 'The Event 5',
          ageMin: 8,
          ageMax: 12,
          category: 'Music',
          liability: true,
          user: org.user._id
        });

        done();
      });
  });
});
