import React, { Component } from 'react';

class CriaMusicaComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomeMusica: '',
        }
        this.changeNomeMusicaHandler = this.changeNomeMusicaHandler.bind(this);
        this.salvarMusica = this.salvarMusica.bind(this);
    }

    salvarMusica = (e) => {
        e.preventDefault();
        let musica = {
            nome: this.state.nomeMusica,
            artista: {
                nome: 'Red Hot Chili Peppers',
                genero: 'Funky-Rock-Punky-Indie'
            },
            album: {
                titulo: 'Stadium Arcadium',
                anoLancamento: 2006,
            }
        };
        console.log('música => ' + JSON.stringify(musica));
    }

    cancel(){
        this.props.history.push('/musicas');
    }

    changeNomeMusicaHandler = (event) => {
        this.setState({ nomeMusica: event.target.value });
    }

    render() {
        return (
            <div>
                <br/>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <br/>
                            <h3 className="text-center">Adicionar Música</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Música </label>
                                        <input placeholder="Nome da música" name="nomeMusica" className="form-control" value={this.state.nomeMusica} onChange={this.changeNomeMusicaHandler} />
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

export default CriaMusicaComponent;