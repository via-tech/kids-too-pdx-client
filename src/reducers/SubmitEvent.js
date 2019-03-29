import {
  CREATE_EVENT,
  UPDATE_CONTACT_NAME,
  UPDATE_CONTACT_EMAIL,
  UPDATE_CONTACT_PHONE,
  UPDATE_EVENT_NAME,
  UPDATE_WEBSITE,
  UPDATE_DATE,
  UPDATE_LOCATION_VENUE,
  UPDATE_LOCATION_ADDRESS,
  UPDATE_LOCATION_STATE,
  UPDATE_LOCATION_ZIPCODE,
  UPDATE_TIME,
  UPDATE_PRICE,
  UPDATE_RRATE,
  UPDATE_MINAGE,
  UPDATE_MAXAGE,
  UPDATE_CATEGORY,
  UPDATE_DESCRIPTION,
  CLEAR_FORM
} from '../actions/submitEvent';

const initialState = {
  contact: {
    contactName: '',
    email: '',
    phone: ''
  },
  name: '',
  website: '',
  date: '',
  time: '',
  location: {
    venue: '',
    address: '',
    state: '',
    zipcode: ''
  },
  price: '',
  reducedRate: false,
  minAge: '',
  maxAge: '',
  category: '',
  description: ''
};

export default function reducer(state = initialState, { payload, type }) {
  switch(type) {
    case CREATE_EVENT:
      return {
        ...state
      };
    case UPDATE_EVENT_NAME: 
      return {
        ...state,
        name: payload
      };
    case UPDATE_CONTACT_NAME:
      return {
        ...state,
        contact: { ...state.contact, contactName: payload }
      };
    case UPDATE_CONTACT_PHONE:
      return {
        ...state,
        contact: { ...state.contact, phone: payload }
      };
    case UPDATE_CONTACT_EMAIL:
      return {
        ...state,
        contact: { ...state.contact, email: payload }
      };
    case UPDATE_WEBSITE: 
      return {
        ...state,
        website: payload
      };
    case UPDATE_DATE:
      return {
        ...state,
        date: payload
      };
    case UPDATE_TIME:
      return {
        ...state,
        time: payload
      };
    case UPDATE_LOCATION_VENUE:
      return {
        ...state,
        location: { ...state.location, venue: payload }
      };
    case UPDATE_LOCATION_ADDRESS:
      return {
        ...state,
        location: { ...state.location, address: payload }
      };
    case UPDATE_LOCATION_STATE:
      return {
        ...state,
        location: { ...state.location, state: payload }
      };
    case UPDATE_LOCATION_ZIPCODE:
      return {
        ...state,
        location: { ...state.location, zipcode: payload }
      };
    case UPDATE_PRICE:
      return {
        ...state,
        price: payload
      };
    case UPDATE_RRATE:
      return {
        ...state,
        reducedRate: payload
      };
    case UPDATE_MINAGE:
      return {
        ...state,
        minAge: payload
      };
    case UPDATE_MAXAGE:
      return {
        ...state,
        maxAge: payload
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        category: payload
      };
    case UPDATE_DESCRIPTION:
      return {
        ...state,
        description: payload
      };
    case CLEAR_FORM:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
