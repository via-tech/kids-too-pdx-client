import React from 'react';
import PropTypes from 'prop-types';

function UserInfo({ handleChange }) {
  return (
    <fieldset>
      <legend>User Info</legend>
      <label>Username or Email:
        <input type="text" name="username" onChange={handleChange} required />
      </label>

      <label>Password:
        <input type="password" name="password" onChange={handleChange} required />
      </label>
    </fieldset>
  );
}

UserInfo.propTypes = {
  handleChange: PropTypes.func
};

export default UserInfo;
