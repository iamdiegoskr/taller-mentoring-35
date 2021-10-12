import React, { Component } from 'react'
import NumbersForm from '../components/NumbersForm'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3> Lista de números aleatorios </h3>
        <NumbersForm />
        <Result/>
      </div>
    )
  }
}

export default App
