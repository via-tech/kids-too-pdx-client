import { createAction } from 'promise-middleware-redux';
import { signIn } from '../services/eventsService';

export const [
  setSession,
  SET_SESSION,
  SET_SESSION_PENDING,
  SET_SESSION_FULFILLED,
  SET_SESSION_ERROR
] = createAction('SET_SESSION', signIn);
