import React from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { withError } from '../wrappers/withError';

function CheckoutForm({ subFee, handleClick, stripe, name }) {
  return (
    <section>
      <p>Enter card information to complete activation</p>

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
  name: PropTypes.string.isRequired
};

export default withError(injectStripe(CheckoutForm));
