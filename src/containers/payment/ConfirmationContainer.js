import { connect } from 'react-redux';
import React from 'react';
import Confirmation from '../../components/payment/Confirmation';
import { getConfirmation } from '../../selectors/session';

function ConfirmationContainer(props) {
  return <Confirmation {...props} />;
}

const mapStateToProps = state => ({
  subFee: process.env.SUB_FEE_PROMO,
  confirmation: getConfirmation(state)
});

export default connect(
  mapStateToProps
)(ConfirmationContainer);
