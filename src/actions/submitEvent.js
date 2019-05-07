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

export const UPDATE_EVENT_NAME = 'UPDATE_EVENT_NAME';
export const updateEventName = name => ({
  type: UPDATE_EVENT_NAME,
  payload: name
});

export const UPDATE_CONTACT_NAME = 'UPDATE_CONTACT_NAME';
export const updateContactName = contactName => ({
  type: UPDATE_CONTACT_NAME,
  payload: contactName
});

export const UPDATE_CONTACT_PHONE = 'UPDATE_CONTACT_PHONE';
export const updateContactPhone = contactPhone => ({
  type: UPDATE_CONTACT_PHONE,
  payload: contactPhone
});


export const UPDATE_CONTACT_EMAIL = 'UPDATE_CONTACT_EMAIL';
export const updateContactEmail = contactEmail => ({
  type: UPDATE_CONTACT_EMAIL,
  payload: contactEmail
});

export const UPDATE_WEBSITE = 'UPDATE_WEBSITE';
export const updateWebsite = website => ({
  type: UPDATE_WEBSITE,
  payload: website
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

export const UPDATE_LOCATION_VENUE = 'UPDATE_LOCATION_VENUE';
export const updateLocationVenue = locationVenue => ({
  type: UPDATE_LOCATION_VENUE,
  payload: locationVenue
});

export const UPDATE_LOCATION_ADDRESS = 'UPDATE_LOCATION_ADDRESS';
export const updateLocationAddress = locationAddress => ({
  type: UPDATE_LOCATION_ADDRESS,
  payload: locationAddress
});

export const UPDATE_LOCATION_CITY = 'UPDATE_LOCATION_CITY';
export const updateLocationCity = locationCity => ({
  type: UPDATE_LOCATION_CITY,
  payload: locationCity
});

export const UPDATE_LOCATION_STATE = 'UPDATE_LOCATION_STATE';
export const updateLocationState = locationState => ({
  type: UPDATE_LOCATION_STATE,
  payload: locationState
});

export const UPDATE_LOCATION_ZIPCODE = 'UPDATE_LOCATION_ZIPCODE';
export const updateLocationZipcode = locationZipcode => ({
  type: UPDATE_LOCATION_ZIPCODE,
  payload: locationZipcode
});


export const UPDATE_PRICE = 'UPDATE_PRICE';
export const updatePrice = price => ({
  type: UPDATE_PRICE,
  payload: Number.parseFloat(price)
});

export const UPDATE_RRATE = 'UPDATE_RRATE';
export const updateRr = reduced => ({
  type: UPDATE_RRATE,
  payload: reduced
});
export const UPDATE_INSURANCE = 'UPDATE_INSURANCE';
export const updateInsurance = insurance => ({
  type: UPDATE_INSURANCE,
  payload: insurance
});

export const UPDATE_MINAGE = 'UPDATE_MINAGE';
export const updateMinAge = minAge => ({
  type: UPDATE_MINAGE,
  payload: Number.parseInt(minAge)
});

export const UPDATE_MAXAGE = 'UPDATE_MAXAGE';
export const updateMaxAge = maxAge => ({
  type: UPDATE_MAXAGE,
  payload: Number.parseInt(maxAge)
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

export const CLEAR_FORM = 'CLEAR_FORM';
export const clearForm = () => ({
  type: CLEAR_FORM
});
