import React, { Component } from 'react';
import Tabela from './Tabela';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.inputMusica = React.createRef();
    this.state = {
      musica: [],
    };
  }

  addMusica() {
    // alert(this.inputMusica.current.value);
    // if (this.inputMusica.current.value.trim() === '') {
    //   alert("Preencha a música");
    //   this.inputMusica.current.focus();
    //   return;
    // }
    // this.state.musica.push(this.inputMusica.current.value);
    // this.setState({
    //   musica: this.state.musica,
    // });
    this.appendMusica();
  }

  //= () => Arrow Function JavaScript


  appendMusica() {
    var musica = this.inputMusica.current.value;
    var tr = document.createElement("tr");
    var td = document.createElement("td");
    var conteudo = document.createTextNode(musica);
    td.appendChild(conteudo);
    tr.appendChild(td);
    document.getElementById("bodyTabela").appendChild(tr);
  }



  render() {
    const estilo = { float: "left", marginTop: "10px", marginRight: "20px" };
    return (
      <div>

        <div style={estilo}>
          Música <input type="text" ref={this.inputMusica} />
        </div>

        <div style={estilo} id="artista">
          Artista <input type="text"></input>
        </div>

        <div style={estilo} onClick={this.addMusica.bind(this)}>
          <button>Adicionar</button>
        </div>

        <table style={estilo}>
          <thead>
            <tr>
              <th>Música</th>
              <th>Artista</th>
            </tr>
          </thead>
          <tbody id="bodyTabela">
            <tr>
              <td>Dani California</td>
              <td>Red Hot Chili Peppers</td>
            </tr>
            <tr>
              <td>Snow (Hey Oh)</td>
              <td>Red Hot Chili Peppers</td>
            </tr>
          </tbody>
        </table>


        {/* <Tabela /> */}


      </div>
    );
  }
}

export default App;