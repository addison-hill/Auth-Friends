import React from 'react';
import Login from './Components/Login';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Friends from './Components/Friends';
import PrivateRoute from './Components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Link className="link" to="/login">Login</Link>
          <Link className="link" to="/protected">Friends</Link>
        </nav>
        <Switch>
          <PrivateRoute path='/protected' component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
