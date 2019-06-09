import {
  FETCH_ORGS,
  FETCH_ORGS_PENDING,
  FETCH_ORGS_FULFILLED
} from '../actions/resources';

const initialState = {
  orgs: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_ORGS:
      return {
        ...state,
        orgs: payload
      };
    case FETCH_ORGS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_ORGS_FULFILLED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
