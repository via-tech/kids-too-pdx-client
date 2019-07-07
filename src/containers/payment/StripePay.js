import { connect } from 'react-redux';
import React from 'react';
import StripePayForm from '../../components/payment/StripePayForm';
import { getError } from '../../selectors/stripe';
import { getUser, getToken } from '../../selectors/session';
import { createStripeToken } from '../../actions/stripe';
import { activateSession } from '../../actions/session';

function StripePay(props) {
  return <StripePayForm {...props} />;
}

const mapStateToProps = state => {
  return {
    name: getUser(state).name,
    role: getUser(state).role,
    token: getToken(state),
    error: getError(state),
    subFee: process.env.SUB_FEE_REG,
    apiKey: process.env.STRIPE_PUB_KEY
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  handleClick({ stripe, name }) {
    const stripeAction = createStripeToken({ stripe, name });

    dispatch(stripeAction);

    stripeAction.payload
      .then(({ token }) => activateSession(token.id))
      .then(
        ({ confirmation }) => confirmation ? props.history.push('/confirmation') : null
      );
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripePay);
