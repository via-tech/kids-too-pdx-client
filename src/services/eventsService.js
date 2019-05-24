import {
  post,
  get,
  del,
  patch
} from './request';

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

export const patchEvent = id => patch(`/events/${id}`);

export const deleteEvent = id => del(`/events/${id}`);

export const signUp = user => post('/auth/signup', user);

export const signIn = user => post('/auth/signin', user);

export const patchUser = (id, user) => patch(`/auth/${id}`, user);

export const getOrgs = () => get('/orgs');

export const deleteOrg = id => del(`'/orgs/${id}`);
