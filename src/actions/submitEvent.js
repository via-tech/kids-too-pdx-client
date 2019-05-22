import { createAction } from 'promise-middleware-redux';
import { postEvent } from '../services/eventsService';

export const [
  createEvent,
  CREATE_EVENT,
  CREATE_EVENT_PENDING,
  CREATE_EVENT_FULFILLED,
  CREATE_EVENT_REJECTED,
  CREATE_EVENT_ERROR
] = createAction('CREATE_EVENT', postEvent);

export const UPDATE_EVENT = 'UPDATE_EVENT';
export const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: event
});
