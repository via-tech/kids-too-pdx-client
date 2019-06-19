import React from 'react';
import PropTypes from 'prop-types';
import RegistrationInfo from './RegistrationInfo';
import PaymentInfo from './PaymentInfo';

function SignUpForm(props) {
  const { handleSubmit, user } = props;
  
  return (
    <form onSubmit={handleSubmit.bind(null, user)}>
      <RegistrationInfo {...props} />

      <PaymentInfo {...props} />

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
