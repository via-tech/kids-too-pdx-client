import { 
  SIGN_IN_SESSION,
  SIGN_UP_SESSION,
  UPDATE_USER
} from '../actions/session';

const initialState = {
  user: {},
  token: '',
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SIGN_IN_SESSION:
    case SIGN_UP_SESSION:
      return {
        ...state,
        token: payload.token,
        error: payload.error || null
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...payload }
      };
    default:
      return state;
  }
}
