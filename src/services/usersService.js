import {
  post,
  get,
  del,
  patch
} from './request';

const modelUser = user => {
  const { street, city, state, zipcode } = user;

  const address = {
    street,
    city,
    state,
    zipcode
  };

  return {
    ...user,
    role: user.role || 'org',
    address
  };
};

const passwordCheck = user => {
  const { password, confirmPassword } = user;
  
  if(password !== confirmPassword) return { error: 'Password does not match' };
  
  if(password.length < 8) return { error: 'Password must be at least 8 characters' };

  return false;
};

export const signUp = user => {
  const error = passwordCheck(user);

  if(error) return Promise.resolve(error);

  return post('/auth/signup', modelUser(user))
    .catch(err => err);
};

export const signIn = user => post('/auth/signin', user)
  .catch(err => err);

export const patchUser = updatedUser =>
  patch(`/auth/${updatedUser._id}`, updatedUser)
    .catch(err => err);

export const getOrgs = () => get('/orgs')
  .catch(err => err);

export const deactivateOrg = ({ _id, token }) =>
  del(`/orgs/${_id}`, { token })
    .catch(err => err);

export const deleteUser = ({ _id, token }) =>
  del(`/auth/${_id}`, { token })
    .catch(err => err);

export const activateOrg = ({ stripeToken, token }) => 
  post('/orgs/activate', { stripeToken, token })
    .catch(err => err);

export const recoverPass = username =>
  post('/auth/forgot', { username })
    .catch(err => err);

