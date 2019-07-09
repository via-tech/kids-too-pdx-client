import { createAction } from 'promise-middleware-redux';
import { getStripeToken } from '../services/stripeService';

export const [
  createStripeToken,
  CREATE_STRIPE_TOKEN
] = createAction('CREATE_STRIPE_TOKEN', getStripeToken);
