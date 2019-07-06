import React from 'react';
import PropTypes from 'prop-types';
import { CardElement, injectStripe } from 'react-stripe-elements';

function CheckoutForm({ subFee, handleClick }) {
  return (
    <section>
      <p>Enter card information to complete activation</p>

      <CardElement />

      <h2>Total: ${subFee}</h2>
      <button onClick={handleClick}>Submit Payment</button>
    </section>
  );
}

CheckoutForm.propTypes = {
  subFee: PropTypes.string,
  handleClick: PropTypes.func
};

export default injectStripe(CheckoutForm);
