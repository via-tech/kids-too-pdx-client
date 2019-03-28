import { FETCH_EVENT_DETAIL, FETCH_EVENT_DETAIL_PENDING } from '../actions/eventDetail';

const initialState = {
  loading: false,
  event: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_EVENT_DETAIL:
      return {
        ...state,
        event: action.payload,
        loading: false
      };
    case FETCH_EVENT_DETAIL_PENDING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
