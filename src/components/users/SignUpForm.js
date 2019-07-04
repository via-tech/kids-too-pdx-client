import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInfo from '../payment/RegistrationInfo';
import PaymentInfo from '../payment/PaymentInfo';
import styles from './SignUpForm.css';

function SignUpForm(props) {
  const { handleSubmit, user, error } = props;
  
  return (
    <form className={styles.SignUp} onSubmit={handleSubmit.bind(null, user, error)}>
      {error && <p className={styles.error}>{error}</p>}

      <RegistrationInfo {...props} />

      <PaymentInfo {...props} />

      <button type="submit">Sign Up</button>
    </form>
  );
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string,
};

export default SignUpForm;
