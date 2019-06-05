import { createAction } from 'promise-middleware-redux';
import { signIn, signUp } from '../services/usersService';

export const [
  signUpSession,
  SIGN_UP_SESSION
] = createAction('SIGN_UP_SESSION', signUp);

export const [
  signInSession,
  SIGN_IN_SESSION
] = createAction('SIGN_IN_SESSION', signIn);

export const UPDATE_USER = 'UPDATE_USER';
export const updateUser = user => ({
  type: UPDATE_USER,
  payload: user
});
