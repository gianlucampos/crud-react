import React, { Component } from 'react';
import Tabela from './Tabela';
import './App.css';

class App extends Component {
  render() {
    const estilo = { float: "left", marginTop: "10px", marginRight: "20px" };

    return (
      <div>

        <div style={estilo}>
          Música <input></input>
        </div>

        <div style={estilo}>
          Artista <input></input>
        </div>

        <div style={estilo}>
          <button>Adicionar</button>
        </div>

          <Tabela/>


      </div>
    );
  }
}

export default App;