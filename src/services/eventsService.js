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
    return filters[key] ? route += `${key}=${filters[key]}&` : route;
  });

  return get(route)
    .catch(err => err);
};

export const patchEvent = updatedEvent =>
  patch(`/events/${updatedEvent._id}`, updatedEvent)
    .catch(err => err);

export const deleteEvent = event =>
  del(`/events/${event._id}`, event)
    .catch(err => err);

export const signUp = user => post('/auth/signup', user)
  .catch(err => err);

export const signIn = user => post('/auth/signin', user)
  .catch(err => err);

export const patchUser = (id, user) =>
  patch(`/auth/${id}`, user)
    .catch(err => err);

export const getOrgs = () => get('/orgs')
  .catch(err => err);

export const deleteOrg = org =>
  del(`/orgs/${org.user._id}`, org)
    .catch(err => err);
