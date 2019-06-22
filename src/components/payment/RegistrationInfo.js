import React from 'react';
import PropTypes from 'prop-types';
import styles from './Registration.css';

function RegistrationInfo({ handleChange }) {
  return (
    <fieldset>
      <legend>Organization Info</legend>

      <label>Username<span className={styles.required}>*</span>
        <input type="text" name="username" onChange={handleChange} required />
      </label>

      <label>Organization Name<span className={styles.required}>*</span>
        <input type="text" name="name" onChange={handleChange} required/>
      </label>

      <label>Email<span className={styles.required}>*</span>
        <input type="email" name="email" onChange={handleChange} required />
      </label>

      <label>Phone<span className={styles.required}>*</span>
        <input type="tel" name="phone" onChange={handleChange} required />
      </label>

      <label>Address<span className={styles.required}>*</span>
        <label>Street<span className={styles.required}>*</span>
          <input type="text" name="street" onChange={handleChange} required />
        </label>

        <label>City<span className={styles.required}>*</span>
          <input type="text" name="city" onChange={handleChange} required />
        </label>

        <label>Zip Code<span className={styles.required}>*</span>
          <input type="text" name="zipcode" pattern="[0-9]*" onChange={handleChange} required />
        </label>
      </label>

      <label>Organization Bio:
        <textarea name="bio" onChange={handleChange} />
      </label>

      <label>Password<span className={styles.required}>*</span>
        <input type="password" name="password" onChange={handleChange} required />
      </label>

      <label>Confirm Password<span className={styles.required}>*</span>
        <input type="password" name="confirmPassword" onChange={handleChange} required />
      </label>
    </fieldset>
  );
}

RegistrationInfo.propTypes = {
  handleChange: PropTypes.func
};

export default RegistrationInfo;
