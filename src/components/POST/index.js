
import React from 'react'


import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap'

const Post = ({ title, subtitle, text, img }) => {
  return (
    <>
      <Card>
        <CardImg top className='cardImg' src={img} alt='' />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>{subtitle}</CardSubtitle>
          <hr></hr>

          <CardText>{text}</CardText>
          <Button color='success' size='lg' block>
            See more...
          </Button>
        </CardBody>
      </Card>
    </>
  )
}

export default Post
