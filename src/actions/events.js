import { getEvents } from '../services/eventsService';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchEvents,
  FETCH_EVENTS,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FULFILLED,
  FETCH_EVENTS_REJECTED
] = createAction('FETCH_EVENTS', getEvents);
