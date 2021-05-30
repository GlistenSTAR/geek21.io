import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';

import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import NotFound from './components/not-found/NotFound';

import Bitcoin from './components/bitcoin/Bitcoin';
import Products from './components/products/Products.js';
import Network from './components/network/Network.js';
import Invest from './components/invest/Invest';
import Academy from './components/academy/Academy';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    store.dispatch(clearCurrentProfile());
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/iUSD_wallet" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/USDT_wallet" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/bitcoin_wallet" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/investments" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/team" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard/profile" component={Dashboard} />
            </Switch>
            
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/bitcoin" component={Bitcoin} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/network" component={Network} />
            <Route exact path="/invest" component={Invest} />
            <Route exact path="/academy" component={Academy} />

            <Route exact path="/not-found" component={NotFound} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
