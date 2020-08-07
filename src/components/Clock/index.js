
import React, { Component } from 'react'
import { Badge, Container, Button } from 'reactstrap'

class CLock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      intialDate: new Date().toLocaleTimeString(),
      date: new Date().toLocaleTimeString(),
      color: 'primary',
      counter: 1,
    }

  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date().toLocaleTimeString(),

      })
    }, 1000)
  }

  componentWillMount() {
    setInterval(() => {
      this.setState({
        color: 'danger'
      })
    }, 5000)
  }

  handleClick = () => {
    let { counter } = this.state
    counter = counter + 1
    this.setState({
      counter,


    })
  }

  render() {
    return (
      <>
        <h1>
          <Badge color="primary" >{this.state.date}</Badge>
        </h1>
        <Container>
          <p> <Badge color={this.state.color}>{this.state.counter}</Badge></p>
          <Button onClick={this.handleClick}>click aqui</Button>
        </Container>

      </>
    )


  }

}

export default CLock 