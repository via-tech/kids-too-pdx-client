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

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit(user, event) {
    const action = signInSession(user);
    event.preventDefault();
    dispatch(action);
    console.log('props.history', props.history);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
