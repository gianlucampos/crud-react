import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import MusicaService from '../services/MusicaService';
import '../styles/components/MusicaCad.css';

export function MusicaCad(props: any) {
  const { match: { params: { id } } } = props;
  const history = useHistory();
  const [nomeMusica, setNomeMusica] = useState('');

  useEffect(() => {
    MusicaService.retrieveMusicaById(id).then((res) => {
      setNomeMusica(res.data.nome);
    });
  }, [id]);

  function saveMusica() {
    console.log(nomeMusica);
  }

  function cancel() {
    history.push('/musicas');
  }

  return (
    <div className={"container"}>
      <div className={"box"}>
        <div className={"formCad"}>
          <h2>Cadastro</h2>
          <label> Música </label>
          <input placeholder="Nome da música" name="nomeMusica" value={nomeMusica}
            onChange={event => setNomeMusica(event.target.value)} />
          <br />
          <label> Artista </label>
          <select name="cmbArtista">
            <option value="1">Red Hot Chili Peppers</option>
            <option value="2">Blink 182</option>
          </select>
          <br />
          <label> Album </label>
          <select name="cmbArtista">
            <option value="1">Stadium Arcadium</option>
            <option value="2">The Enema of State</option>
          </select>
          <br />
          <div className="formButtons">
            <button onClick={saveMusica}> Salvar </button>
            <button onClick={cancel}> Cancelar </button>
          </div>
        </div>
      </div>
    </div>
  );
}