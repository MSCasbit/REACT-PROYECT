
import React, { Component } from 'react'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap'
import "./Post.css"

const elements = [

  {
    title: "Este es el título del primer post",
    subtitle: "Este es el subtítulo del primer post",
    text: "perro",
    img: "https://ichef.bbci.co.uk/news/410/cpsprodpb/15665/production/_107435678_perro1.jpg"

  },
  {
    title: "Este es el título del segundo post",
    subtitle: "Este es el subtítulo del segundo post",
    text: "perro",
    img: "https://ichef.bbci.co.uk/news/410/cpsprodpb/15665/production/_107435678_perro1.jpg"

  },
  {
    title: "Este es el título del tercer post",
    subtitle: "Este es el subtítulo del tercero post",
    text: "perro",
    img: "https://ichef.bbci.co.uk/news/410/cpsprodpb/15665/production/_107435678_perro1.jpg"

  },
  {
    title: "Este es el título del cuarto post",
    subtitle: "Este es el subtítulo del cuarto post",
    text: "perro",
    img: "https://ichef.bbci.co.uk/news/410/cpsprodpb/15665/production/_107435678_perro1.jpg"

  }

]

class Post extends Component {
  render() {

    const POSTElements = elements.map((element) => (
      <Card className='totalClass'>
        <CardImg top className='cardImg' src={element.img} alt='' />
        <CardBody className='totalClass2'>
          <CardTitle className='titleClass'>{element.title}</CardTitle>
          <hr></hr>
          <CardSubtitle>{element.subtitle}</CardSubtitle>
          <hr></hr>

          <CardText>{element.text}</CardText>
          <Button className='buttonS' color='success' size='lg' block>
            See more...
          </Button>
        </CardBody>
      </Card>
    ))
    return (
      <Container>
        <div>
          <Col>
            <Row>
              {POSTElements}
            </Row>
          </Col>
        </div>
      </Container>



    )
  }
}


export default Post
