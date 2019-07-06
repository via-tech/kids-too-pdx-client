import { connect } from 'react-redux';
import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from '../../components/payment/CheckoutForm';

function StripePay(props) {
  return (
    <StripeProvider apiKey={process.env.STRIPE_PUB_KEY}>
      <div>
        <h1>Payment</h1>
        <Elements>
          <CheckoutForm {...props} />
        </Elements>
      </div>
    </StripeProvider>
  );
}

const mapStateToProps = () => ({
  subFee: process.env.SUB_FEE_REG
});

const mapDispatchToProps = () => ({
  handleClick() {
    console.log('clicked');
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripePay);
