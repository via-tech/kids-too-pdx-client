import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';
import logo from '../../../public/assets/logo.png';

function Header() {
  return (
    <>
        <section className={styles.container}>
          <header className={styles.Header}>
            <section className={styles.logo}>
              <img src={logo} />
            </section>
            <Link to="/login">Log In</Link>
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

export default Header;
