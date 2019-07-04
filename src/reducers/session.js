import { 
  SIGN_IN_SESSION,
  SIGN_UP_SESSION,
  UPDATE_USER,
  SIGN_OUT_SESSION,
  ACTIVATE_SESSION
} from '../actions/session';

const initialState = {
  user: {},
  token: '',
  error: null,
  confirmation: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SIGN_IN_SESSION:
      return {
        ...state,
        token: payload.token,
        error: payload.error
      };
    case SIGN_UP_SESSION:
    case ACTIVATE_SESSION:
      return {
        ...state,
        token: payload.token,
        error: payload.error,
        confirmation: payload.token ? true : false
      };
    case UPDATE_USER:
      return {
        ...state,
        user: { ...state.user, ...payload }
      };
    case SIGN_OUT_SESSION:
      return {
        ...state,
        token: ''
      };
    default:
      return state;
  }
}
