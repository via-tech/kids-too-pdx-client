import React from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ handleSubmit, handleChange, user }) {
  return (
    <form onSubmit={handleSubmit.bind(null, user)}>
      <fieldset>
        <legend>User Info</legend>
        <label>Email:
          <input type="text" name="email" value={user.email} onChange={handleChange} required />
        </label>

        <label>Password:
          <input type="text" name="password" value={user.password} onChange={handleChange} required />
        </label>
      </fieldset>
    </form>
  );
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object
};

export default SignUpForm;
