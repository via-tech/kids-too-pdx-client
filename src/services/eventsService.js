import { post, get } from './request';

export const postEvent = event => post('/events', event);
export const getEvents = () => get('/events');
export const getEvent = id => get(`/events/${id}`);
export const getFilteredEvents = filters => {
  let route = '/events/query/q?';

  Object.keys(filters).every(key => {
    return filters[key] ? route += `${key}=${filters[key]}&` : route;
  });

  return get(route);
};

