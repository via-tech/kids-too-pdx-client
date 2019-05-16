import { SET_SESSION } from '../actions/session';

const initialState = {
  token: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SET_SESSION:
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}
