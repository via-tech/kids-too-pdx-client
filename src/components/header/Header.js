import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home';

function Header() {
  return (
    
    <Router>
      <header>
        <nav>
          <Link to='/'>Home</Link>
          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route exact path='/submitevent' Component={SubmitEvent} />
                <Route exact path='/contact' Component={Contact} /> */}
          </Switch>
        </nav>
      </header>
    </Router>
  );
}
export default Header;
