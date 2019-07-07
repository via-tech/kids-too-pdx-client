import { connect } from 'react-redux';
import React from 'react';
import StripePayForm from '../../components/payment/StripePayForm';
import { getError } from '../../selectors/stripe';
import { getUser } from '../../selectors/session';
import { createStripeToken } from '../../actions/stripe';

function StripePay(props) {
  return <StripePayForm {...props} />;
}

const mapStateToProps = state => {
  return {
    name: getUser(state).name,
    error: getError(state),
    subFee: process.env.SUB_FEE_REG,
    apiKey: process.env.STRIPE_PUB_KEY
  };
};

const mapDispatchToProps = dispatch => ({
  handleClick({ stripe, name }) {
    const action = createStripeToken({ stripe, name });

    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripePay);
