import {
  UPDATE_EVENT
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
    default:
      return state;
  }
}
