import { connect } from 'react-redux';
import React from 'react';
import StripePayForm from '../../components/payment/StripePayForm';

function StripePay(props) {
  return <StripePayForm {...props} />;
}

const mapStateToProps = () => ({
  subFee: process.env.SUB_FEE_REG,
  apiKey: process.env.STRIPE_PUB_KEY
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
