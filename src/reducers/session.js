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
  error: '',
  confirmation: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case SIGN_IN_SESSION:
    case SIGN_UP_SESSION:
      return {
        ...state,
        user: { ...payload.user },
        token: payload.token || '',
        error: payload.error || ''
      };
    case ACTIVATE_SESSION:
      return {
        ...state,
        user: payload,
        error: payload.error || '',
        confirmation: !payload.error ? true : false 
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
