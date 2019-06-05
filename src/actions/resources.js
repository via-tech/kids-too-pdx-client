import { getOrgs } from '../services/usersService';
import { createAction } from 'promise-middleware-redux';

export const [
  fetchOrgs,
  FETCH_ORGS,
  FETCH_ORGS_PENDING,
  FETCH_ORGS_FULFILLED,
  FETCH_ORGS_REJECTED
] = createAction('FETCH_ORGS', getOrgs);
