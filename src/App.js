import React from 'react';
import './App.css'

//RRD
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

//screens
import BlogNotes from "./screens/NotesBlog"
import CurrencyConverter from "./screens/CurrencyConverter"
import NavB from "./components/NavBar"
import Users from "./screens/Users"
function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact={true} path="/">
            <>
              <NavB currentPath="home" />
              <h1>Holi</h1>

            </>
          </Route>
          <Route path="/notesBlog">
            <NavB currentPath="notesBlog" />
            <BlogNotes />
          </Route>
          <Route path="/CurrencyConverter">
            <NavB currentPath="CurrencyConverter" />
            <CurrencyConverter />
          </Route>
          <Route path="/Users">
            <NavB currentPath="/Users" />
            <Users />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
