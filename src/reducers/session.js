import { 
  SIGN_IN_SESSION,
  SIGN_UP_SESSION
} from '../actions/session';

const initialState = {
  token: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SIGN_IN_SESSION:
    case SIGN_UP_SESSION:
      return {
        ...state,
        token: payload.token
      };
    default:
      return state;
  }
}
