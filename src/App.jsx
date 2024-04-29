import React, { Component } from 'react'
import Imager from './components/Imager'
import './App.css'


export class App extends Component {
  render() {
    return (
      <div>
        <h1 className='header'>Around the world</h1>
        <Imager/>
      </div>
    )
  }
}

export default App