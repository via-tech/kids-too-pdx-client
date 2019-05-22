import { connect } from 'react-redux';
import React from 'react';
import SignInForm from '../../components/users/SignInForm';
import {
  updateUser,
  signInSession
} from '../../actions/session';
import { getUser } from '../../selectors/session';

function SignIn(props) {
  return <SignInForm {...props} />;
}

const mapStateToProps = state => ({
  user: getUser(state)
});

const mapDispatchToProps = dispatch => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit(user, event) {
    event.preventDefault();
    dispatch(signInSession(user));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
