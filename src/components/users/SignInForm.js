import React from 'react';
import PropTypes from 'prop-types';

function SignInForm({ handleSubmit, handleChange, user }) {
  return (
    <form onSubmit={handleSubmit.bind(null, user)}>
      <fieldset>
        <legend>User Info</legend>
        <label>Username:
          <input type="text" name="username" onChange={handleChange} required />
        </label>

        <label>Password:
          <input type="text" name="password" onChange={handleChange} required />
        </label>
      </fieldset>
      <button type="submit">Login</button>
    </form>
  );
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object
};

export default SignInForm;
