import React from 'react';
import PropTypes from 'prop-types';
import { withError } from '../wrappers/withError';

function ForgotPassword({ handleChange, handleSubmit, user, message }) {
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
    </main>
  );
}

ForgotPassword.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  message: PropTypes.string,
  user: PropTypes.object
};

export default withError(ForgotPassword);
