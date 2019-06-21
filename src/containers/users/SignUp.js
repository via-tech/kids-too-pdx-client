import { connect } from 'react-redux';
import React from 'react';
import SignUpForm from '../../components/users/SignUpForm';
import {
  updateUser,
  signUpSession
} from '../../actions/session';
import {
  getUser,
  getError
} from '../../selectors/session';

function SignUp(props) {
  return <SignUpForm {...props} />;
}

const mapStateToProps = state => ({
  user: getUser(state),
  subFee: process.env.SUB_FEE_TRIAL,
  error: getError(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit(user, event, error) {
    event.preventDefault();
    const action = signUpSession(user);
    dispatch(action);
    if(!error) action.payload
      .then(() => props.history.push('/confirmation'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
