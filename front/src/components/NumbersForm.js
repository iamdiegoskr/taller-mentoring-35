import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandomNumber } from '../actions';

import '../css/form.css'

const NumbersForm = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandomNumber(state));
  };

  return <div>
    <form onSubmit={onSubmit} className="form">

      <label className="message-input" htmlFor="number1">Ingrese el numero inicial</label>
      <input id="number1" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number1: e.target.value})}
      />

      <br/>

      <label className="message-input" htmlFor="number2">Ingrese el numero final</label>
      <input id="number2" type="number" min="0" max="100"
        onChange={(e) => setState({...state,number2: e.target.value})}
      />

      <br/>
      <button className="btn-form" type="submit" disabled={props.loading}>
        Enviar
      </button>

    </form>
  </div>
}

const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}

export default connect(stateMapToPros)(NumbersForm)
