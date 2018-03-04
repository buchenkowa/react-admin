import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'

class SignUp extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <h3>SignUp</h3>
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

const validate = ({email, password}) => {
  const errors = {}

  if (!email) { errors.email = 'email is a required field' }
  if (!password) { errors.password = 'password is a required field' }

  if (email && !emailValidator.validate(email)) { errors.email = 'invaild email' }
  if (password && password < 10) { errors.password = 'to short' }

  return errors
}

export default reduxForm({
  form: 'auth',
  validate
})(SignUp)
