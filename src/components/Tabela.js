import React, { Component } from 'react';

class Tabela extends Component {

    constructor(params) {
        super();
        this.id = 3;
    }


    add(...args) {
        let tr = document.createElement("tr");
        this.addLine(this.id++, tr);
        this.addLine(args[0], tr);
        this.addLine(args[1], tr);
    }

    addLine(elem, linha) {
        let td = document.createElement("td");
        let conteudo = document.createTextNode(elem);
        td.appendChild(conteudo);
        linha.appendChild(td);
        document.getElementById("bodyTabela").appendChild(linha);
    }

    render() {
        const estilo = { float: "left", marginTop: "30px" };
        return (
            <table style={estilo}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Música</th>
                        <th>Artista</th>
                    </tr>
                </thead>
                <tbody id="bodyTabela">
                    <tr>
                        <td>1</td>
                        <td>Dani California</td>
                        <td>Red Hot Chili Peppers</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Snow (Hey Oh)</td>
                        <td>Red Hot Chili Peppers</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Tabela;