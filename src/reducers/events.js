import { FETCH_EVENTS, FETCH_EVENTS_PENDING, FETCH_EVENTS_FULFILLED } from '../actions/events';

const initialState = {
  events: [],
  loading: false
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_EVENTS_FULFILLED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
