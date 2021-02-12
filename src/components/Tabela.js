import React, { Component } from 'react';

class Tabela extends Component {
    constructor() {
        super();
        this.state = {
            musicas: [],
            artistas: []
        };
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
                <tbody>
                    <tr>
                        <td>Dani California</td>
                        <td>Red Hot Chili Peppers</td>
                    </tr>
                    <tr>
                        <td>Snow (Hey Oh)</td>
                        <td>Red Hot Chili Peppers</td>
                    </tr>
                    <tr>
                        <td>{this.state.musicas}</td>
                        <td>{this.state.artistas}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Tabela;