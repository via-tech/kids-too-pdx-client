import { createAction } from 'promise-middleware-redux';
import { createStripeToken } from '../services/stripeService';

export const [
  getStripeToken,
  CREATE_STRIPE_TOKEN
] = createAction('CREATE_STRIPE_TOKEN', createStripeToken);
