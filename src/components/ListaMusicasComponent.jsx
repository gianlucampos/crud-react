import React, { Component } from 'react';
import ListaMusicasService from '../services/ListaMusicasService';

class ListaMusicasComponent extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            musicas: []
        }
        this.addMusica = this.addMusica.bind(this);
    }

    // componentDidMount(){
    //     ListaMusicasService.getMusicas().then((res)=>{
    //         this.setState({
    //             musicas: res.data
    //         });
    //     });
    // }

    componentDidMount() {
        this.setState({
            musicas: ListaMusicasService.getMusicas()
        });
    }

    addMusica(){
        this.props.history.push('/musicas/create');
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

export default ListaMusicasComponent;