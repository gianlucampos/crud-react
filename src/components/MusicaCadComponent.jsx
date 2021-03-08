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
            album: '',
            albums: [],
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
                artista: musica.artista.id,
                albums: (await ArtistaService.retrieveAlbumsByArtista(musica.artista.id)).data,
                album: musica.album.id,
            });
        } else {
            let arts = (await ArtistaService.retrieveArtistas()).data;
            let albs = (await ArtistaService.retrieveAlbumsByArtista(arts[0].id)).data
            this.setState({
                artistas: arts,
                artista: arts[0].id,
                albums: albs,
                album: albs[0].id,
            });
        }
    }

    salvarMusica = (e) => {
        e.preventDefault();
        let musica = {
            nome: this.state.nomeMusica,
            artista: this.state.artistas.find(e => e.id == this.state.artista),
            album: this.state.albums.find(e => e.id == this.state.album)
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
                                                    <option key={artista.id} value={artista.id}>{artista.nome}</option>
                                            )}
                                        </select>
                                        <br />
                                        <label>Album </label>
                                        <select className="form-control"
                                            value={this.state.album}
                                            onChange={this.handleChangeCmbAlbum}>
                                            {this.state.albums.map(
                                                album =>
                                                    <option key={album.id} value={album.id}>{album.titulo}</option>
                                            )}
                                        </select>
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