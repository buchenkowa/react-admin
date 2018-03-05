import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ErrorField extends Component {
  static propTypes = {

  };

  render() {
    const {input, meta: {error, touched}, type, label} = this.props;

    const errorText = touched && error && <div style = {{color: 'red'}}>{error}</div>
    return(
      <div>
        {label} <input {...input} type = {type}/>
        {errorText}
      </div>
    )
  }
}

export default ErrorField
