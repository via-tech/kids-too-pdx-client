import {
  UPDATE_EVENT,
  CREATE_EVENT
} from '../actions/submitEvent';

const initialState = {
  event: {}
};

export default function reducer(state = initialState, { payload, type }) {
  switch(type) {
    case UPDATE_EVENT:
      return {
        ...state,
        event: { ...state.event, ...payload }
      };
    case CREATE_EVENT:
      return {
        event: {}
      };
    default:
      return state;
  }
}
