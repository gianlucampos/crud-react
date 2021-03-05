import React, { Component } from 'react';
import MusicaService from '../services/MusicaService';

class MusicaCadComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            nomeMusica: '',
            artista: '',
            album: '',
            artistas: [], // Possivelmente será passado através dos props
            albuns: [],
        }
        this.handleChangeMusica = this.handleChangeMusica.bind(this);
        this.handleChangeCmbArtista = this.handleChangeCmbArtista.bind(this);
        this.handleChangeCmbAlbum = this.handleChangeCmbAlbum.bind(this);
        this.salvarMusica = this.salvarMusica.bind(this);
    }


    async componentDidMount() {
        let artistas = [];  //retrieveAllArtistas
        let albums = []; //retrieveAlbunsByArtista      
        let nomeMusica = '';
        let nomeArtista = '';
        let nomeAlbum = '';

        if (this.state.id != undefined) {
            let musica = (await MusicaService.retrieveMusicaById(this.state.id)).data;
            nomeMusica = musica.nome;
            nomeArtista = musica.artista.nome;
            nomeAlbum = musica.album.titulo;
            artistas =  [musica.artista];
            albums = [musica.album];
        }

        this.setState({
            nomeMusica: nomeMusica,
            artista: nomeArtista,
            album: nomeAlbum,
            artistas: artistas,
            albuns: artistas
        });
    }

    salvarMusica = (e) => {
        e.preventDefault();
        let musica = {
            nome: this.state.nomeMusica,
            artista: this.state.artista,
            album: this.state.album
        };
        console.log(musica);
        console.log(this.state.id);
        MusicaService.createMusica(musica);
    }

    cancel() {
        this.props.history.push('/musicas');
    }

    handleChangeMusica = (event) => {
        this.setState({ nomeMusica: event.target.value });
    }

    handleChangeCmbArtista = (event) => {
        let albumObject = '';
        if (event.target.value != '') {
            albumObject = MusicaService.retrieveAlbumsByArtista(JSON.parse(event.target.value));
        }
        this.state.albuns = albumObject;
        this.setState({
            artista: event.target.value,
            albuns: albumObject,
            album: albumObject[0],
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
                                        <select className="form-control" value={this.state.artista}
                                            onChange={this.handleChangeCmbArtista}>
                                            {this.state.artistas.map(
                                                artista =>
                                                    <option key={artista.id} value={JSON.stringify(artista)}>{artista.nome}</option>
                                            )}
                                        </select>
                                        <br />

                                        <label>Album </label>
                                        <select className="form-control" value={this.state.album}
                                            onChange={this.handleChangeCmbAlbum}>
                                            {this.state.albuns.map(
                                                album =>
                                                    <option key={album.id} value={JSON.stringify(album)}>{album.titulo}</option>
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