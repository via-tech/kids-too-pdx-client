import React from 'react';
import PropTypes from 'prop-types';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';
import { withError } from '../wrappers/withError';

function StripePayForm(props) {
  const { apiKey, role, token } = props;

  if(!token) return history.push('/login');

  if(role === 'org' || role === 'admin') return <p>This account has already been activated!</p>;

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
  apiKey: PropTypes.string.isRequired,
  role: PropTypes.string,
  token: PropTypes.string
};

export default withError(StripePayForm);
