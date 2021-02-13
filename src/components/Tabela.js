import React, { Component } from 'react';

class Tabela extends Component {

    add(...args) {
        var musica = args[0];
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var conteudo = document.createTextNode(musica);
        td.appendChild(conteudo);
        tr.appendChild(td);
        document.getElementById("bodyTabela").appendChild(tr);
    }

    render() {
        const estilo = { float: "left", marginTop: "30px" };
        return (
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
        );
    }
}

export default Tabela;