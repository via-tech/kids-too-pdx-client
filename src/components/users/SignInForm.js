import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.css';
import UserInfo from './UserInfo';

function SignInForm(props) {
  const { handleSubmit, user } = props;
  return (
    <form className={styles.SignIn} onSubmit={handleSubmit.bind(null, user)}>
      <UserInfo {...props} />
      <button type="submit">Login</button>
    </form>
  );
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  user: PropTypes.object,
};

export default SignInForm;
