import { createAction } from 'promise-middleware-redux';
import { postEvent } from '../services/eventsService';

export const [
  createEvent,
  CREATE_EVENT,
  CREATE_EVENT_PENDING,
  CREATE_EVENT_FULFILLED,
  CREATE_EVENT_REJECTED,
  CREATE_EVENT_ERROR
] = createAction('CREATE_EVENT', postEvent);

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const updateContactName = (contact, email, phone) => ({
  type: UPDATE_CONTACT,
  payload: contact, email, phone
});

export const UPDATE_EVENT_NAME = 'UPDATE_EVENT_NAME';
export const updateEventName = name => ({
  type: UPDATE_EVENT_NAME,
  payload: name
});

export const UPDATE_DATE = 'UPDATE_DATE';
export const updateDate = date => ({
  type: UPDATE_DATE,
  payload: date
});

export const UPDATE_TIME = 'UPDATE_TIME';
export const updateTime = time => ({
  type: UPDATE_TIME,
  payload: time
});

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const updateLocation = (venue, address, city, state, zipcode) => ({
  type: UPDATE_LOCATION,
  payload: venue, address, city, state, zipcode
});


export const UPDATE_PRICE = 'UPDATE_PRICE';
export const updatePrice = price => ({
  type: UPDATE_PRICE,
  payload: price
});

export const UPDATE_RRATE = 'UPDATE_RRATE';
export const updateRr = rr => ({
  type: UPDATE_RRATE,
  payload: rr
});

export const UPDATE_MINAGE = 'UPDATE_MINAGE';
export const updateMinAge = minAge => ({
  type: UPDATE_MINAGE,
  payload: minAge
});

export const UPDATE_MAXAGE = 'UPDATE_MAXAGE';
export const updateMaxAge = maxAge => ({
  type: UPDATE_MAXAGE,
  payload: maxAge
});

export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const updateCategory = category => ({
  type: UPDATE_CATEGORY,
  payload: category
});

export const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
export const updateDescription = description => ({
  type: UPDATE_DESCRIPTION,
  payload: description
});
