import { RESET_PASS } from '../actions/forgotPass';

const initialState = {
  message: '',
  error: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case RESET_PASS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
