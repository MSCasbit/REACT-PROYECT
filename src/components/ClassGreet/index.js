
import React, { Component } from 'react'


class ClassGreet extends Component {
  render() {
    return (
      <p>
        Hola {this.props.firstname} {this.props.lastname}

      </p>
    )

  }

}

export default ClassGreet
