import React, { Component } from 'react';
import ListaMusicasService from '../services/ListaMusicasService';

class ListaMusicasComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            musicas: []
        }
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

    render() {
        return (
            <div>
                <h2>Lista de Músicas</h2>
                <div>
                    <table>
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