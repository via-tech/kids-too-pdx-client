import {
  FETCH_EVENTS,
  FETCH_EVENTS_PENDING,
  FETCH_EVENTS_FULFILLED,
  FETCH_FILTERED_EVENTS,
  FETCH_FILTERED_EVENTS_PENDING,
  FETCH_FILTERED_EVENTS_FULFILLED,
  UPDATE_FILTERS
} from '../actions/events';

const initialState = {
  events: [],
  loading: false,
  filters: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_FILTERED_EVENTS:
    case FETCH_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case FETCH_FILTERED_EVENTS_PENDING:
    case FETCH_EVENTS_PENDING:
      return {
        ...state,
        loading: true
      };
    case FETCH_FILTERED_EVENTS_FULFILLED:
    case FETCH_EVENTS_FULFILLED:
      return {
        ...state,
        loading: false
      };
    case UPDATE_FILTERS:
      return {
        ...state,
        filters: { ...state.filters, ...action.payload }
      };
    default:
      return state;
  }
}
