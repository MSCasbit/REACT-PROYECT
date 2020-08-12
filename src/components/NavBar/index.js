import React, { Component } from 'react'
import { Router, Route, Link } from 'react-router-dom'
import { Switch } from '@material-ui/core'


function NavB({ currentPath }) {
  return (
    <nav>
      <ul>
        {
          currentPath !== 'home' ? (
            <li><Link to="/">Home</Link></li>
          ) : null
        }
        {
          currentPath !== 'notesBlog' ? (
            <li><Link to="/notesBlog">blog de notas</Link></li>
          ) : null
        }
        {
          currentPath !== 'CurrencyConverter' ? (
            <li><Link to="/CurrencyConverter">corredor de divisas</Link></li>
          ) : null
        }
      </ul>
    </nav>
  )
}













export default NavB