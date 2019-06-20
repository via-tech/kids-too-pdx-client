import { connect } from 'react-redux';
import React from 'react';
import SignInForm from '../../components/users/SignInForm';
import {
  updateUser,
  signInSession
} from '../../actions/session';
import {
  getUser,
  getError
} from '../../selectors/session';

function SignIn(props) {
  return <SignInForm {...props} />;
}

const mapStateToProps = state => ({
  user: getUser(state),
  error: getError(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  handleChange({ target }) {
    dispatch(updateUser({ [target.name]: target.value }));
  },

  handleSubmit(user, event) {
    const action = signInSession(user);
    event.preventDefault();
    dispatch(action);
    action.payload
      .then(res => {
        res.token ? props.history.goBack() : null;
      });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
