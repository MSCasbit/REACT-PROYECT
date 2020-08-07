import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';


//components
import FunctionGreet from "./components/FunctionGreet"
import ClassGreet from "./components/ClassGreet"
import Post from './components/POST/index'
import Clock from './components/Clock/index'
import SwitchExample from './components/SwitchExample'
import List from './components/List/index'

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
        <Clock />
        <SwitchExample />
        <List />
      </header>
      <Post />
    </div>
  )
}

export default App
