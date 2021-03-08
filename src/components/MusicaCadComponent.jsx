import React, { Component } from 'react';
import ArtistaService from '../services/ArtistaService';
import MusicaService from '../services/MusicaService';

class MusicaCadComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nomeMusica: '',
            artista: '',
            artistas: [],
        }
        this.handleChangeMusica = this.handleChangeMusica.bind(this);
        this.handleChangeCmbArtista = this.handleChangeCmbArtista.bind(this);
        this.handleChangeCmbAlbum = this.handleChangeCmbAlbum.bind(this);
        this.salvarMusica = this.salvarMusica.bind(this);
    }

    async componentDidMount() {
        if (this.state.id != undefined) {
            let musica = (await MusicaService.retrieveMusicaById(this.state.id)).data;
            this.setState({
                nomeMusica: musica.nome,
                artistas: (await ArtistaService.retrieveArtistas()).data,
                artista: musica.artista.nome,
            });
        }
    }

    salvarMusica = (e) => {
        e.preventDefault();
        let musica = {
            nome: this.state.nomeMusica,
            artista: this.state.artistas[this.state.artista],
        };
        console.log(musica);
        // MusicaService.createMusica(musica);
    }

    cancel() {
        this.props.history.push('/musicas');
    }

    handleChangeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value });
    }

    handleChangeCmbArtista = (event) => {
        this.setState({
            artista: event.target.value,
        });
    }

    handleChangeCmbAlbum = (event) => {
        this.setState({
            album: event.target.value
        });
    }


    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br />
                            <h3 className="text-center">Adicionar Música</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Música </label>
                                        <input placeholder="Nome da música" name="nomeMusica" className="form-control" value={this.state.nomeMusica} onChange={this.handleChangeMusica} />
                                        <br />
                                        <label>Artista </label>
                                        <select className="form-control"
                                            value={this.state.artista}
                                            onChange={this.handleChangeCmbArtista}>
                                            {this.state.artistas.map(
                                                artista =>
                                                    <option key={artista.id} value={artista.nome}>{artista.nome}</option>
                                            )}
                                        </select>
                                        <br />
                                    </div>
                                    <button className="btn btn-success" onClick={this.salvarMusica}>Salvar</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancelar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MusicaCadComponent;