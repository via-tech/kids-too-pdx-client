import { get, post } from './request';
export const postEvent = event => post('/events', event);
export const getEvents = () => get('/events');
export const getEvent = id => get(`/events/${id}`);

