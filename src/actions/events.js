import { 
  getEvents,
  getFilteredEvents
} from '../services/eventsService';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchEvents,
  FETCH_EVENTS,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FULFILLED,
  FETCH_EVENTS_REJECTED
] = createAction('FETCH_EVENTS', getEvents);

export const [
  fetchFilteredEvents,
  FETCH_FILTERED_EVENTS,
  FETCH_FILTERED_EVENTS_PENDING,
  FETCH_FILTERED_EVENTS_FULFILLED,
  FETCH_FILTERED_EVENTS_REJECTED
] = createAction('FETCH_FILTERED_EVENTS', getFilteredEvents);

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const updateFilters = filter => ({
  type: UPDATE_FILTERS,
  payload: filter
});
