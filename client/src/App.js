import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// REDUX
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

// COMPONENTS
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import WatchList from './components/watchList/WatchList';
import WatchedList from './components/watchedList/WatchedList';

// UTILS
import { loadUser } from './actions/auth';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/watchList" component={WatchList} />
          <Route exact path="/watchedList" component={WatchedList} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
