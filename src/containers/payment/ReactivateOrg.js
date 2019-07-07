import { connect } from 'react-redux';
import React from 'react';
import ReactivateOrgForm from '../../components/payment/ReactivateOrgForm';
import { getUser, getError } from '../../selectors/session';
import { updateUser, activateSession } from '../../actions/session';

function ReactivateOrg(props) {
  return <ReactivateOrgForm {...props} />;
}

const mapStateToProps = state => ({
  user: getUser(state),
  error: getError(state),
  subFee: process.env.SUB_FEE_TRIAL,
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit(user, event) {
    const action = activateSession(user);

    event.preventDefault();
    dispatch(action);

    action.payload
      .then(res => {
        res.user.role === 'org' ? props.history.push('/') : null;
      });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactivateOrg);
