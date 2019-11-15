import React, {Component} from 'react';
import {Provider, connect} from 'react-redux'
import withStyles from './styles'
import {BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import configureStore from './configureStore'

import './App.css';
import store from './store'
import MainPage from "./features/mainPage/components";
import Login from "./features/user/components/Login";
import Auth from './Auth'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <Auth/>
        </div>
      </Provider>
    );
  }
}

export default withStyles(App);
