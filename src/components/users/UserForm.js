import React from 'react';
import PropTypes from 'prop-types';

function UserForm({ handleSubmit, handleChange }) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>User Info</legend>
        <label>Email:
          <input type="text" name="email" onChange={handleChange} required />
        </label>

        <label>Password:
          <input type="text" name="password" onChange={handleChange} required />
        </label>
      </fieldset>
    </form>
  );
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object
};

export default UserForm;
