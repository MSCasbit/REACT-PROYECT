
import React, { Component } from 'react'


import { Container, Badge, Row, Button } from 'reactstrap'

class SwitchExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    }
    this.handleClickSwitch = this.handleClickSwitch.bind(this)
  }

  handleClickSwitch() {
    const { active } = this.state
    this.setState({
      active: !active,
    })
  }


  render() {
    const { active } = this.state
    const color = active ? 'primary' : 'secondary'
    return (
      <>
        <Container>
          <div>
            <p><Badge color={color}>Holi</Badge></p>
            <Button color="success" onClick={this.handleClickSwitch}>Switch color</Button>
          </div>
        </Container>
      </>
    )
  }

}

export default SwitchExample