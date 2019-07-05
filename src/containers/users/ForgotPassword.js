import { connect } from 'react-redux';
import React from 'react';
import ForgotPasswordForm from '../../components/users/ForgotPasswordForm';
import { updateUser } from '../../actions/session';
import { getUser } from '../../selectors/session';
import {
  getError,
  getMessage
} from '../../selectors/forgotPass';
import { resetPass } from '../../actions/forgotPass';

function ForgotPassword(props) {
  return <ForgotPasswordForm {...props} />;
}

const mapStateToProps = state => ({
  user: getUser(state),
  error: getError(state),
  message: getMessage(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit(user, event) {
    event.preventDefault();
    
    const action = resetPass(user.username);
    dispatch(action);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword);
