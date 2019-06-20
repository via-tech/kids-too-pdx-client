import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../../public/assets/logo.png';

function Header({ token, handleSignOut }) {
  return (
    <>
        <section className={styles.container}>
          <header className={styles.Header}>
            <section className={styles.logo}>
              <img src={logo} />
            </section>
            {!token && <Link to="/login">Sign In</Link>}
            {!token && <Link to="/signup">Sign Up</Link>}
            {token && <button onClick={handleSignOut}>Sign Out</button>}
            <nav className={styles.nav}>
              <Link to="/">Home</Link>
              <Link to='/submit-event'>Submit Event</Link>
              <Link to="/contact">Contact</Link>
              <Link to='/resources'>Resources</Link>
            </nav>
          </header>
        </section>
      </>
  );
}

Header.propTypes = {
  token: PropTypes.string,
  handleSignOut: PropTypes.func
};

export default Header;
