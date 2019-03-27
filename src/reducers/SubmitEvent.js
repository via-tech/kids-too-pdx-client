import {
  CREATE_EVENT,
  UPDATE_CONTACT,
  UPDATE_EVENT_NAME,
  UPDATE_DATE,
  UPDATE_LOCATION,
  UPDATE_TIME,
  UPDATE_PRICE,
  UPDATE_RRATE,
  UPDATE_MINAGE,
  UPDATE_MAXAGE,
  UPDATE_CATEGORY,
  UPDATE_DESCRIPTION
} from '../actions/submitEvent';

const initialState = {
  contact: {},
  name: '',
  date: '',
  time: '',
  location: {},
  price: '',
  rr: true,
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
    case UPDATE_CONTACT:
      return {
        ...state,
        contact: payload
      };
    case UPDATE_EVENT_NAME:
      return {
        ...state,
        name: payload
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
    case UPDATE_LOCATION:
      return {
        ...state,
        location: payload
      };
    case UPDATE_PRICE:
      return {
        ...state,
        price: payload
      };
    case UPDATE_RRATE:
      return {
        ...state,
        rr: payload
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
    default:
      return state;
  }
}
