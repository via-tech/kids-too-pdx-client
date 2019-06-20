import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInfo from './RegistrationInfo';
import PaymentInfo from './PaymentInfo';
import styles from './SignUpForm.css';

function SignUpForm(props) {
  const { handleSubmit, user, error, confirmation, handleClick } = props;
  
  if(confirmation) return (
    <section>
      <p>Sign up successful! A $90.00 subscription fee will automatically be charged after trial period ends. Subscription will automatically renew each year. Email reminders will be sent out accordingly. To manage subscription preferences, please visit the dashboard. Thank you!</p>

      <button onClick={handleClick}>Click to Continue</button>
    </section>
  );

  return (
    <form className={styles.SignUp} onSubmit={handleSubmit.bind(null, user)}>
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
  handleClick: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string,
  confirmation: PropTypes.bool
};

export default SignUpForm;
