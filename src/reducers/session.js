import { 
  SIGN_IN_SESSION,
  SIGN_UP_SESSION,
  UPDATE_USER
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
        error: payload.error || null
      };
    case SIGN_UP_SESSION:
      return {
        ...state,
        token: payload.token,
        error: payload.error || null,
        confirmation: payload.token ? true : false
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
