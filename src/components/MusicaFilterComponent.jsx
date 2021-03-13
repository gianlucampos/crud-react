import React, { Component } from 'react';
import MusicaService from '../services/MusicaService';

class MusicaFilterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            musicas: []
        }
        this.addMusica = this.addMusica.bind(this);
        this.editMusica = this.editMusica.bind(this);
    }

    componentDidMount() {
        console.log('Montando Tela');
        MusicaService.retriveMusicas().then((res) => {
            this.sortMusicas(res.data);
            this.setState({
                musicas: res.data
            });
        });
    }

    sortMusicas(musicas) {
        musicas.sort((a, b) => {
            if (a.artista.nome === b.artista.nome) {
                return 0;
            }
            if (a.artista.nome > b.artista.nome) {
                return 1;
            }
            return -1;
        });
    }

    addMusica() {
        this.props.history.push('/musicas/create');
    }

    editMusica(id) {
        this.props.history.push(`/musicas/edit/${id}`);
    }

    deleteMusica(id) {
        MusicaService.deleteMusica(id).then((res) => {
            if (res.status === 200) {
                this.setState({
                    musicas: this.state.musicas.filter(e => e.id !== id)
                });
            } else {
                alert("Não foi possível remover esta música");
            }
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Lista de Músicas</h2>

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.addMusica}>Adicionar Música</button>
                </div>

                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Música</th>
                                <th>Album</th>
                                <th>Artista</th>
                                <th>Ações</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.musicas.map(
                                    musica =>
                                        <tr key={musica.id}>
                                            <td>{this.state.musicas.indexOf(musica) + 1}</td>
                                            <td>{musica.nome}</td>
                                            <td>{musica.album.titulo}</td>
                                            <td>{musica.artista.nome}</td>
                                            <td>
                                                <button className="btn btn-info"
                                                    style={{ marginLeft: "10px" }}
                                                    onClick={() => this.editMusica(musica.id)}
                                                >Editar</button>
                                                <button className="btn btn-danger"
                                                    style={{ marginLeft: "10px" }}
                                                    onClick={() => this.deleteMusica(musica.id)}
                                                >Remover</button>
                                            </td>
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

export default MusicaFilterComponent;