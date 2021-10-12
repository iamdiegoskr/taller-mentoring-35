import React, { Component } from 'react'
import From from '../components/From'
import NumbersForm from '../components/NumbersForm'
import NumbersResult from '../components/NumbersResult'
import Result from '../components/Result'

class App extends Component {// component stateful
  render() {
    return (
      <div>
        <h3>Lista Random</h3>
        <p>Sistema Ramdom - Demo</p>
        <From />
        <Result />
        <h3> Lista de números aleatorios </h3>
        <NumbersForm />
        <NumbersResult />
      </div>
    )
  }
}

export default App
