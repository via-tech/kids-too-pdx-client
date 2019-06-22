import React from 'react';
import PropTypes from 'prop-types';
import styles from './SignInForm.css';

function UserInfo({ handleChange, error }) {
  return (
    <section className={styles.SignIn}>
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
    </section>
  );
}

UserInfo.propTypes = {
  handleChange: PropTypes.func,
  error: PropTypes.object
};

export default UserInfo;
