import React, { Component } from 'react';
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

        <div style={estilo}>
          <table>
            <tr>
              <th>Música</th>
              <th>Artista</th>
            </tr>
            <tr>
              <th>Dani California</th>
              <th>Red Hot Chili Peppers</th>
            </tr>
            <tr>
              <th>Snow (Hey Oh)</th>
              <th>Red Hot Chili Peppers</th>
            </tr>
          </table>
        </div>


      </div>
    );
  }
}

export default App;