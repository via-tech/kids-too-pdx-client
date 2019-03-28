import { createAction } from 'promise-middleware-redux';
import { getEvent } from '../services/eventsService';

export const [
  fetchEventDetail,
  FETCH_EVENT_DETAIL,
  FETCH_EVENT_DETAIL_PENDING,
  FETCH_EVENT_DETAIL_FULFILLED
] = createAction('FETCH_EVENT_DETAIL', getEvent);

