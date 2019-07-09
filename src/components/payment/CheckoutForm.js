import React from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ subFee, handleClick, stripe, name, error }) {
  return (
    <section>
      <p>Enter card information to complete activation</p>
      { error && <p>{error}</p>}

      <CardElement />

      <h2>Total: ${subFee}</h2>
      <button onClick={handleClick.bind(null, { stripe, name })}>Submit Payment</button>
    </section>
  );
}

CheckoutForm.propTypes = {
  subFee: PropTypes.string,
  handleClick: PropTypes.func,
  stripe: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default injectStripe(CheckoutForm);
