
import React, { Component } from 'react'
import { Container, Row, ListGroup, ListGroupItem, Col, Badge, Button } from 'reactstrap'
import "./List.css"

const elements = [
  {
    position: 1,
    text: "perro"
  },
  {
    position: 2,
    text: "text 2"
  },
  {
    position: 3,
    text: "text 3"
  }
]


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeList: true,
    };
    this.handleShowListClick = this.handleShowListClick.bind(this);
  }

  handleShowListClick() {
    const { activeList } = this.state;
    this.setState({
      activeList: !activeList,
    });
  }

  render() {
    const { activeList } = this.state;
    let UIElements = elements.map(({ text }, index) => {
      const upperText = text.toUpperCase();
      return (
        <ListGroupItem
          onClick={this.handleListItemClick}
          key={index}
          className="List-item"
        >
          {upperText}
        </ListGroupItem>
      );
    });
    if (!UIElements.length) {
      UIElements = (
        <h1>
          No hay <Badge color="danger">elementos</Badge>
        </h1>
      )
    }


    return (
      <Container>
        <Row>
          <Col>
            <ListGroup>
              {UIElements}
            </ListGroup>
          </Col>
          <Col>{activeList ? <ListGroup>{UIElements}</ListGroup> : null}</Col>
          <Button onClick={this.handleShowListClick}>
            {activeList ? "Hide list" : "Show List"}
          </Button>
        </Row>
      </Container>
    )
  }

}

export default List
