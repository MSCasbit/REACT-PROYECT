import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';


//components
import FunctionGreet from "./components/FunctionGreet"
import ClassGreet from "./components/ClassGreet"
import Post from './components/POST/index'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <FunctionGreet firstname="Mauricio" lastname="Sanchez" />
        <ClassGreet firstname="vicente" lastname="muñoz" />
      </header>
      <Container>
        <Row>
          <Col xs='12' md='4'>
            <Post
              img='https://cnet3.cbsistatic.com/img/uK0qlUTQJnQyehKBKQxcaJzzLmQ=/756x567/2020/08/05/7a674763-fb6c-48c8-8a95-5df0eef3ba92/gettyimages-1227908824.jpg'
              title='That´s insane '
              subtitle='What´s happend really? '
              text='Local media outlets said the explosions happened in the Port area where warehouses held explosive materials and possibly fireworks. 

              “The official story that came out is that this is a fireworks factory,” Mr Ware told Sky News.'
            />
          </Col>
          <Col xs='12' md='4'>
            <Post
              img='https://cnet3.cbsistatic.com/img/uK0qlUTQJnQyehKBKQxcaJzzLmQ=/756x567/2020/08/05/7a674763-fb6c-48c8-8a95-5df0eef3ba92/gettyimages-1227908824.jpg'
              title='That´s insane'
              subtitle='What´s happend really '
              text='Local media outlets said the explosions happened in the Port area where warehouses held explosive materials and possibly fireworks. 

              “The official story that came out is that this is a fireworks factory,” Mr Ware told Sky News.'
            />
          </Col>
          <Col xs='12' md='4'>
            <Post
              img='https://cnet3.cbsistatic.com/img/uK0qlUTQJnQyehKBKQxcaJzzLmQ=/756x567/2020/08/05/7a674763-fb6c-48c8-8a95-5df0eef3ba92/gettyimages-1227908824.jpg'
              title='That´s insane'
              subtitle='What´s happend really'
              text='Local media outlets said the explosions happened in the Port area where warehouses held explosive materials and possibly fireworks. 

              “The official story that came out is that this is a fireworks factory,” Mr Ware told Sky News.'
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
