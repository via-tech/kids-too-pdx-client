import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from '../users/UserInfo';
import PaymentInfo from './PaymentInfo';
import styles from '../users/SignInForm.css';

function ReactivateOrgForm(props) {
  const { handleSubmit, user, error } = props;
  
  return (
    <form className={styles.SignIn} onSubmit={handleSubmit.bind(null, user)}>
      {error && <p className={styles.error}>{error}</p>}

      <UserInfo {...props} />

      <PaymentInfo {...props} />

      <button type="submit">Activate Account</button>
    </form>
  );
}

ReactivateOrgForm.propTypes = {
  handleSubmit: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string
};

export default ReactivateOrgForm;
