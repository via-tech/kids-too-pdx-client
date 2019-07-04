import React from 'react';
import PropTypes from 'prop-types';

function ForgotPassword({ handleChange, handleSubmit, user, message, error }) {
  return (
    <main>
      <form onSubmit={handleSubmit.bind(null, user)}>
        <p>Enter the username or email associated with the account</p>
        <label>Username/Email
          <input type="text" name="username" onChange={handleChange} required />
        </label>

        <button type="submit">Recover</button>
      </form>

      {message && <p>{message}</p>}
      {error && <p>Something went wrong. Try again.</p>}
    </main>
  );
}

ForgotPassword.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  message: PropTypes.string,
  user: PropTypes.object,
  error: PropTypes.string
};

export default ForgotPassword;
