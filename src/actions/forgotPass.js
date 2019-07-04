import { createAction } from 'promise-middleware-redux';
import { recoverPass } from '../services/usersService';

export const [
  resetPass,
  RESET_PASS
] = createAction('RESET_PASS', recoverPass);
