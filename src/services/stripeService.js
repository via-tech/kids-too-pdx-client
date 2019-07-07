export const createStripeToken = ({ stripe, name }) =>
  stripe.createToken({ name })
    .catch(err => err);
