import React from 'react';
import PropTypes from 'prop-types';

function SignUpForm({ handleSubmit, handleChange, user }) {
  return (
    <form onSubmit={handleSubmit.bind(null, user)}>
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
          <input type="text" name="password" onChange={handleChange} required />
        </label>
      </fieldset>

      <button type="submit">Sign Up</button>
    </form>
  );
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object
};

export default SignUpForm;
