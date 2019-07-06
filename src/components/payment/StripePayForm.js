import React from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

function StripePayForm(props) {
  const { apiKey } = props;
  return (
    <StripeProvider apiKey={apiKey}>
      <div>
        <h1>Payment</h1>
        <Elements>
          <CheckoutForm {...props} />
        </Elements>
      </div>
    </StripeProvider>
  );
}

StripePayForm.propTypes = {
  apiKey: PropTypes.string.isRequired
};

export default StripePayForm;
