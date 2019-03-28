import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import 'normalize.css';
import Home from '../home/Home';
import EventDetailContainer from '../../containers/EventDetailContainer';
import Contact from '../info/Contact';
import AboutUs from '../info/AboutUs';
import Callback from '../../containers/auth/Callback';
import Resources from '../resources/Resources';
// import withSession from '../../containers/auth/withSession';
import SubmitEvent from '../../components/submission/SubmitEvent';
// import SubmitEventContainer from '../../containers/SubmitEventContainer';

export default function App() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/submit-event' component={withSession(SubmitEvent)} /> */}
        <Route exact path='/events/:id' component={EventDetailContainer} />
        {/* <Route exact path='/submit-event' component={withSession(SubmitEventContainer)} /> */}
        {/* <Route exact path='/admin' component={AdminEvents} />
        <Route exact path='/admin/event/:id' component={AdminEvents} /> */}
        <Route exact path='/contact' component={Contact} /> 
        <Route exact path='/aboutus' component={AboutUs} /> 
        <Route exact path='/callback' component={Callback} /> 
        <Route exact path='/resources' component={Resources} />
      </Switch>
      <Footer />
    </>
    </Router>
  );
}

