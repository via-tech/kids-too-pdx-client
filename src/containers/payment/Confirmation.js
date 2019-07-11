import { connect } from 'react-redux';
import React from 'react';
import ConfirmationPage from '../../components/payment/ConfirmationPage';
import { getConfirmation } from '../../selectors/session';

function Confirmation(props) {
  return <ConfirmationPage {...props} />;
}

const mapStateToProps = state => ({
  subFee: process.env.SUB_FEE_PROMO,
  confirmation: getConfirmation(state)
});

export default connect(
  mapStateToProps
)(Confirmation);
