import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderContainer from '../../containers/header/HeaderContainer';
import Footer from '../footer/Footer';
import 'normalize.css';
import Home from '../home/Home';
import EventDetail from '../events/EventDetail';
import Contact from '../info/Contact';
import AboutUs from '../info/AboutUs';
import ResourcesContainer from '../../containers/resources/ResourcesContainer';
import SubmitEventContainer from '../../containers/events/SubmitEventContainer';
import SignIn from '../../containers/users/SignIn';
import SignUp from '../../containers/users/SignUp';
import ConfirmationContainer from '../../containers/payment/ConfirmationContainer';

export default function App() {
  return (
    <Router>
      <>
      <HeaderContainer />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/events/:id' component={EventDetail} />
        <Route exact path='/submit-event' component={SubmitEventContainer} />
        <Route exact path='/contact' component={Contact} /> 
        <Route exact path='/aboutus' component={AboutUs} /> 
        <Route exact path='/resources' component={ResourcesContainer} />
        <Route exact path='/login' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/confirmation' component={ConfirmationContainer} />
      </Switch>
      <Footer />
    </>
    </Router>
  );
}
