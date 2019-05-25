import {
  post,
  get,
  del,
  patch
} from './request';

export const signUp = user => post('/auth/signup', user)
  .catch(err => err);

export const signIn = user => post('/auth/signin', user)
  .catch(err => err);

export const patchUser = updatedUser =>
  patch(`/auth/${updatedUser._id}`, updatedUser)
    .catch(err => err);

export const getOrgs = () => get('/orgs')
  .catch(err => err);

export const deleteOrg = org =>
  del(`/orgs/${org._id}`, org)
    .catch(err => err);
