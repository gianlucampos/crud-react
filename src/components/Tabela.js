import React, { Component } from 'react';

class Tabela extends Component {
    render() {
        const estilo = { float: "left", marginTop: "30px" };
        return (
            <table style={estilo}>
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
        );
    }
}

export default Tabela;