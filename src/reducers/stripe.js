import {
  CREATE_STRIPE_TOKEN
} from '../actions/stripe';

const initialState = {
  token: '',
  error: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_STRIPE_TOKEN:
      return {
        ...state,
        token: payload.token || '',
        error: payload.error || ''
      };
    default:
      return state;
  }
}
