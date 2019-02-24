import React, {Component} from 'react';

import './App.css';
import MainPage from './components/mainPage/MainPage'
import Dashboard from './components/dashboard/Dashboard'
import Header from './components/header/Header'
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import configureStore from './configureStore'


import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header/>
            <Route exact path="/" component={MainPage}/>
            <Route path="/home" component={MainPage}/>
            <Route path="/dashboard/:dashboardId" component={Dashboard}/>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
