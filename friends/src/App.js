import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute path='/protected'>
            <Route exact path='/protected' component={ FriendsList } />
          </PrivateRoute>
          <Route exact path='/login' component={ Login } />
          <Route component={ Login } />
        </Switch>
      </div>  
    </Router>
  );
}

export default App;
