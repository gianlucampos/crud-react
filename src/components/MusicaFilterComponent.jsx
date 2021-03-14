import React, { Component } from 'react';
import { FaEdit, FaPlusCircle, FaTrash } from 'react-icons/fa';
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
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-5">
                                    <h2>Músicas</h2>
                                </div>
                                <div className="col-7">
                                    <button
                                        className="btn btn-primary"
                                        onClick={this.addMusica}>
                                        <FaPlusCircle type="button" className="iconButton" />
                                        Adicionar Música
                                    </button>

                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Música</th>
                                    <th>Album</th>
                                    <th>Artista</th>
                                    <th>Ações
                                </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.musicas.map(
                                    musica =>
                                        <tr key={musica.id}>
                                            <td>{this.state.musicas.indexOf(musica) + 1}</td>
                                            <td>{musica.nome}</td>
                                            <td>{musica.album.titulo}</td>
                                            <td>{musica.artista.nome}</td>
                                            <td>
                                                <FaEdit color="green" title="Editar"
                                                    className="iconButton"
                                                    onClick={() => this.editMusic(musica.id)} />
                                                <FaTrash color="red" title="Excluir"
                                                    className="iconButton"
                                                    onClick={() => this.deleteMusica(musica.id)} />
                                            </td>
                                        </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicaFilterComponent;