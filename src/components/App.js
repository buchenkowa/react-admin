import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Route} from 'react-router-dom'
import ProtectedRoute from './common/ProtectedRoute'
import AdminPage from './routes/Admin'
import AuthPage from './routes/Auth'

class App extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <ProtectedRoute path = '/admin' component = {AdminPage} />
        <Route path = '/auth' component = {AuthPage} />
      </div>
    )
  }
}

export default App
