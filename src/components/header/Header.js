import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home';
import EventDetail from '../events/EventsDetail';
import SubmitEvent from '../submission/SubmitEvent';
import styles from './Header.css';

function Header() {
  return (
    <>
      <h1 className={styles.logo}>
        KidsTOO!
      </h1>
      <Router>
        <section>
          <header className={styles.Header}>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/submit-event'>Submit Event</Link>
              <Link to='/'>Contact</Link>
            </nav>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/submit-event' component={SubmitEvent} />
            <Route exact path='/events/:id' component={EventDetail} />
            {/* <Route exact path='/contact' component={Contact} />  */}
          </Switch>
        </section>
      </Router>
    </>
  );
}
export default Header;
