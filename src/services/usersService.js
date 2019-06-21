import {
  post,
  get,
  del,
  patch
} from './request';

const modelUser = user => {
  const { street, city, state, zipcode, billStreet, billCity, billState, billZipcode, cardName, cardNumber, securityCode, expMonth, expYear, method } = user;

  const address = {
    street,
    city,
    state,
    zipcode
  };

  const billAddress = {
    billStreet: billStreet || street,
    billCity: billCity || city,
    billState: billState || state,
    billZipcode: billZipcode || zipcode
  };

  const payment = {
    cardNumber,
    cardName,
    securityCode,
    expMonth,
    expYear,
    method,
    billAddress
  };

  return {
    ...user,
    role: user.role || 'org',
    payment,
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

export const deleteOrg = org =>
  del(`/orgs/${org._id}`, org)
    .catch(err => err);

export const deleteUser = user =>
  del(`/auth/${user._id}`, user)
    .catch(err => err);
