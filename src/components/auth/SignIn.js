import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {reduxForm, Field} from 'redux-form'


class SignIn extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h3>SignIn</h3>
        <form onSubmit = {this.props.handleSubmit}>
          <div>
            email: <Field name = 'email' component = 'input' type = 'text' />
          </div>
          <div>
            password: <Field name = 'password' component = 'input' ype = 'text' />
          </div>
          <div>
            <input type = 'submit' />
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'auth'
})(SignIn)
