import { post, get } from './request';

export const postEvent = event => post('/events', event);

export const getEvents = () => get('/events');

export const getFilteredEvents = filters => {
  console.log('filters', filters);
  let route = '/events/query/q?';
  Object.keys(filters).every(key => route += `${key}=${filters[key]}&`);
  console.log('route', route);
  return get(route);
};

export const getEvent = id => get(`/events/${id}`);
