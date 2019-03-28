import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home';
import EventDetailContainer from '../../containers/EventDetailContainer';
// import SubmitEvent from '../submission/SubmitEvent';
// import SubmitEventContainer from '../../containers/SubmitEventContainer';
import AdminEvents from '../admin/AdminEvents';
import AboutUs from '../info/AboutUs';
import Callback from '../../containers/auth/Callback';
// import { withSession } from '../../containers/auth/withSession';
import Contact from '../info/Contact';
import styles from './Header.css';
import Resources from '../resources/Resources';

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
              <Link to='/contact'>Contact</Link>
              <Link to='/resources'>Resources</Link>
            </nav>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/submit-event' component={withSession(SubmitEvent)} /> */}
            <Route exact path='/events/:id' component={EventDetailContainer} />
            {/* <Route exact path='/submit-event' component={withSession(SubmitEventContainer)} /> */}
            <Route exact path='/admin' component={AdminEvents} />
            <Route exact path='/admin/event/:id' component={AdminEvents} />
            <Route exact path='/contact' component={Contact} /> 
            <Route exact path='/aboutus' component={AboutUs} /> 
            <Route exact path='/callback' component={Callback} /> 
            <Route exact path='/resources' component={Resources} />
          </Switch>
        </section>
      </Router>
    </>
  );
}
export default Header;
