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
  error: getError(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit({ user }, event) {
    event.preventDefault();
    const action = signUpSession(user);
    dispatch(action);
    action.payload
      .then(res => !res.error ? props.history.push('/activate') : null);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
