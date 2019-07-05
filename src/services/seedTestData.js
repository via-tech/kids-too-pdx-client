import {
  postEvent,
  deleteEvent
} from './eventsService';

import {
  signUp,
  deleteUser
} from './usersService';

let createdOrg = null;
let createdInactive = null;
let createdEvents = null;
let createdAdmin = null;
let createdForgetful = null;

const org = {
  role: 'org',
  username: 'theOrg999',
  password: '12345678',
  confirmPassword: '12345678',
  name: 'The Org',
  email: 'theorg999@email.com',
  phone: '5551234567',
  street: '1223 Main St.',
  city: 'Portland',
  state: 'OR',
  zipcode: '97203',
  cardNumber: '1234567890123456',
  cardName: 'The Org',
  expMonth: '01',
  expYear: '2020',
  securityCode: '123',
  method: 'visa'
};

const inactiveOrg = {
  role: 'inactive',
  username: 'theInactiveOrg999',
  password: '12345678',
  confirmPassword: '12345678',
  name: 'The Inactive Org 999',
  email: 'theinactiveorg999@email.com',
  phone: '5551234567',
  street: '1223 Main St.',
  city: 'Portland',
  state: 'OR',
  zipcode: '97203',
  cardNumber: '1234567890123456',
  cardName: 'The Inactive Org 999',
  expMonth: '01',
  expYear: '2020',
  securityCode: '123',
  method: 'visa'
};

const admin = {
  role: 'admin',
  adminPassCode: process.env.ADMIN_PASS_CODE,
  username: 'admin999',
  password: '12345678',
  confirmPassword:  '12345678',
  name: 'The Admin',
  email: 'admin999@email.com',
  phone: '5551234567',
  street: '1223 Main St.',
  city: 'Portland',
  state: 'OR',
  zipcode: '97203',
  cardNumber: '1234567890123456',
  cardName: 'The Admin',
  expMonth: '01',
  expYear: '2020',
  securityCode: '123',
  method: 'visa'
};

const forgetfulUser = {
  role: 'org',
  username: 'forgetfulUser',
  password: '12345678',
  confirmPassword: '12345678',
  name: 'The Forgetful Org',
  email: 'forgetfulUser@email.com',
  phone: '5551234567',
  street: '1223 Main St.',
  city: 'Portland',
  state: 'OR',
  zipcode: '97203',
  cardNumber: '1234567890123456',
  cardName: 'Forgetful User',
  expMonth: '01',
  expYear: '2020',
  securityCode: '123',
  method: 'visa'
};

const events = [
  {
    name: 'The Event 1',
    ageMin: 8,
    ageMax: 12,
    category: 'Art',
    liability: true
  },
  {
    name: 'The Event 2',
    ageMin: 9,
    ageMax: 15,
    category: 'Education',
    liability: true
  },
  {
    name: 'The Event 3',
    ageMin: 2,
    ageMax: 10,
    category: 'Art',
    liability: true
  },
  {
    name: 'The Event 4',
    ageMin: 15,
    ageMax: 20,
    category: 'Education',
    liability: true
  },
  {
    name: 'The Event 5',
    ageMin: 8,
    ageMax: 12,
    category: 'Art',
    liability: true
  }
];

const createUsers = () => Promise.all([
  signUp(org),
  signUp(inactiveOrg),
  signUp(admin),
  signUp(forgetfulUser)
])
  .then(([userRes, inactiveRes, adminRes, forgetfulRes]) => {
    createdOrg = userRes;
    createdInactive = inactiveRes;
    createdAdmin = adminRes;
    createdForgetful = forgetfulRes;
  })
  .catch(err => err);

const createEvents = events => {
  const { token } = createdOrg;
  return Promise.all(events.map(event => {
    event.token = token;
    return postEvent(event);
  }))
    .then(eventRes => createdEvents = eventRes)
    .catch(err => err);
};

const deleteEvents = events => {
  const { token } = createdOrg;
  return Promise.all(events.map(event => {
    event.token = token;
    return deleteEvent(event);
  }))
    .catch(err => err);
};

export const seedTestData = () => {
  return createUsers()
    .then(() => createEvents(events))
    .then(() => ({
      createdOrg,
      createdInactive,
      createdAdmin,
      createdEvents,
      createdForgetful
    }))
    .catch(err => err);
};

export const deleteTestData = () => {
  const { user, token } = createdAdmin;

  return Promise.all([
    deleteUser({ _id: createdOrg.user._id, token }),
    deleteUser({ _id: createdInactive.user._id, token }),
    deleteUser({ _id: user._id, token }),
    deleteUser({ _id: createdForgetful.user._id, token }),
    deleteEvents(createdEvents)
  ])
    .then(res => ({ deleted: res.length }))
    .catch(err => err);
};
