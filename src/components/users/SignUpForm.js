import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInfo from '../payment/RegistrationInfo';
import styles from './SignUpForm.css';
import { withError } from '../wrappers/withError';

function SignUpForm(props) {
  const { handleSubmit, user } = props;

  return (
    <form className={styles.SignUp} onSubmit={handleSubmit.bind(null, { user })}>

      <RegistrationInfo {...props} />

      <button type="submit">Sign Up</button>
    </form>
  );
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string
};

export default withError(SignUpForm);
