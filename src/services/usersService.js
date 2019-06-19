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

  const billAdress = {
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
    billAdress
  };

  return {
    ...user,
    role: 'org',
    payment,
    address
  };
};

export const signUp = user => post('/auth/signup', modelUser(user))
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
