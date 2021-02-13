import React, { Component } from 'react';
import Tabela from './Tabela';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.inputMusica = React.createRef();
    this.inputArtista = React.createRef();
    this.child = React.createRef();
  }

  clearAllElements() {
    this.inputMusica.current.value = null;
    this.inputArtista.current.value = null;
  }

  validaCampos() {
    if (this.valor.trim() === '') {
      alert("Preencha o campo");
      this.focus();
      return false;
    }
    return true;
  }

  adicionar = () => {
    let musica = {
      valid: this.validaCampos,
      valor: this.inputMusica.current.value,
      focus: () => {
        this.inputMusica.current.focus();
      }
    }
    let artista = {
      valid: this.validaCampos,
      valor: this.inputArtista.current.value,
      focus: () => {
        this.inputArtista.current.focus();
      }
    }
    if (musica.valid() && artista.valid()) {
      this.child.current.add(musica.valor, artista.valor);
      this.clearAllElements();
    }
  }

  render() {
    const estilo = { float: "left", marginTop: "10px", marginRight: "20px" };
    return (
      <div>
        <div style={estilo}>
          Música <input type="text" ref={this.inputMusica} />
        </div>

        <div style={estilo} id="artista">
          Artista <input type="text" ref={this.inputArtista}></input>
        </div>

        <div style={estilo}>
          <button onClick={this.adicionar}>Adicionar</button>
        </div>

        <Tabela ref={this.child} />

      </div>
    );
  }
}

export default App;