import { createAction } from 'promise-middleware-redux';
import { signIn, signUp } from '../services/eventsService';

export const [
  signUpSession,
  SIGN_UP_SESSION
] = createAction('SIGN_UP_SESSION', signUp);

export const [
  signInSession,
  SIGN_IN_SESSION
] = createAction('SIGN_IN_SESSION', signIn);
