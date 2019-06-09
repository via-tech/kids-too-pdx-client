import {
  post,
  get,
  del,
  patch
} from './request';

export const postEvent = event => post('/events', event)
  .catch(err => err);

export const getEvents = () => get('/events')
  .catch(err => err);

export const getEvent = id => get(`/events/${id}`)
  .catch(err => err);

export const getFilteredEvents = filters => {
  let route = '/events/query/q?';

  Object.keys(filters).every(key => {
    return filters[key] && filters[key] !== 'All' ? route += `${key}=${filters[key]}&` : route;
  });

  if(route === '/events/query/q?') route = '/events';

  return get(route)
    .catch(err => err);
};

export const patchEvent = updatedEvent =>
  patch(`/events/${updatedEvent._id}`, updatedEvent)
    .catch(err => err);

export const deleteEvent = event =>
  del(`/events/${event._id}`, event)
    .catch(err => err);
