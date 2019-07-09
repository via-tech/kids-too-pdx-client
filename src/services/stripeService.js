export const getStripeToken = ({ stripe, name }) =>
  stripe.createToken({ name })
    .then(({ token, error }) => {
      if(token) return { token: token.id };

      return { error: error.message };
    })
    .catch(err => err);
