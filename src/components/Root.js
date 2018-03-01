import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '../redux'
import App from './App'
// import { BrowserRouter as Router } from 'react-router-dom'
import { ConnectedRouter as Router } from 'react-router-redux'
import history from '../history'

class Root extends Component {
  static propTypes = {

  };

  render() {
    return (
      <Provider store = {store}>
        <Router history = {history}>
        <App />
        </Router>
      </Provider>
    )
  }
}

export default Root
