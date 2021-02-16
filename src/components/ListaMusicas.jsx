import React, { Component } from 'react';

class ListaMusicas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musicas: [{
                id: 1,
                nome: 'Dani California',
                artista: {
                    nome: 'Red Hot Chili Peppers',
                    genero: 'Funky-Rock-Punky-Indie'
                },
                album: {
                    titulo: 'Stadium Arcadium',
                    anoLancamento: 2006,
                    capa: null,
                }
            },
            {
                id: 2,
                nome: 'Snow (Hey Oh)',
                artista: {
                    nome: 'Red Hot Chili Peppers',
                    genero: 'Funky-Rock-Punky-Indie'
                },
                album: {
                    titulo: 'Stadium Arcadium',
                    anoLancamento: 2006,
                    capa: null,
                }
            }]
        }
    }

    render() {
        return (
            <div>
                <h2>Lista de Músicas</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Album</th>
                                <th>Música</th>
                                <th>Artista</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.musicas.map(
                                    musica =>
                                        <tr key={musica.id}>
                                            <td>{this.state.musicas.indexOf(musica) + 1}</td>
                                            <td>{musica.album.titulo}</td>
                                            <td>{musica.nome}</td>
                                            <td>{musica.artista.nome}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListaMusicas;