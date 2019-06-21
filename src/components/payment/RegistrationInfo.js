import React from 'react';
import PropTypes from 'prop-types';

function RegistrationInfo({ handleChange }) {
  return (
    <fieldset>
      <legend>Organization Info</legend>

      <label>Username:
        <input type="text" name="username" onChange={handleChange} required />
      </label>

      <label>Organization Name:
        <input type="text" name="name" onChange={handleChange} required/>
      </label>

      <label>Email:
        <input type="email" name="email" onChange={handleChange} required />
      </label>

      <label>Phone:
        <input type="tel" name="phone" onChange={handleChange} required />
      </label>

      <label>Address:
        <label>Street:
          <input type="text" name="street" onChange={handleChange} required />
        </label>

        <label>City:
          <input type="text" name="city" onChange={handleChange} required />
        </label>

        <label>Zip Code:
          <input type="text" name="zipcode" pattern="[0-9]*" onChange={handleChange} required />
        </label>
      </label>

      <label>Organization Bio:
        <textarea name="bio" onChange={handleChange} />
      </label>

      <label>Password:
        <input type="password" name="password" onChange={handleChange} required />
      </label>

      <label>Confirm Password:
        <input type="password" name="confirmPassword" onChange={handleChange} required />
      </label>
    </fieldset>
  );
}

RegistrationInfo.propTypes = {
  handleChange: PropTypes.func
};

export default RegistrationInfo;