import React from 'react';
import PropTypes from 'prop-types';
import UserInfo from './UserInfo';
import styles from './SignInForm.css';
import { Link } from 'react-router-dom';
import { withError } from '../wrappers/withError';

function SignInForm(props) {
  const { handleSubmit, user, error, history } = props;

  if(error && error.includes('deactivated')) history.push('/activate');

  return (
    <section>
      <form className={styles.SignIn} onSubmit={handleSubmit.bind(null, user)}>

        <UserInfo {...props} />

        <button type="submit">Login</button>
      </form>

      <Link to={'/forgot'}><p>Forgot Password?</p></Link>
    </section>
  );
}

SignInForm.propTypes = {
  handleSubmit: PropTypes.func,
  user: PropTypes.object,
  error: PropTypes.string,
  history: PropTypes.object
};

export default withError(SignInForm);
