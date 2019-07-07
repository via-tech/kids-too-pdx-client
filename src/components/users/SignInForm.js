import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import styles from './SignInForm.css';

function SignInForm(props) {
  const { handleSubmit, user, error, history } = props;

  if(error && error.includes('deactivated')) history.push('/activate');

  return (
    <form className={styles.SignIn} onSubmit={handleSubmit.bind(null, user)}>
      {error && <p className={styles.error}>{error}</p>}

      <UserInfo {...props} />

      <button type="submit">Login</button>
    </form>
  );
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string,
  history: PropTypes.object
};

export default SignInForm;
