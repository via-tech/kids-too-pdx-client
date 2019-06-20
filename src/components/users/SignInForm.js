import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.css';

function SignInForm({ handleSubmit, handleChange, user, error }) {
  return (
    <form className={styles.SignIn} onSubmit={handleSubmit.bind(null, user)}>
      {error && <p className={styles.error}>{error}</p>}
      <fieldset>
        <legend>User Info</legend>
        <label>Username or Email:
          <input type="text" name="username" onChange={handleChange} required />
        </label>

        <label>Password:
          <input type="password" name="password" onChange={handleChange} required />
        </label>
      </fieldset>
      <button type="submit">Login</button>
    </form>
  );
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string
};

export default SignInForm;
