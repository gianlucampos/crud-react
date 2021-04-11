import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useFullPageLoader } from '../hooks/UseFullPageLoader';
import { Album } from '../model/Album';
import { Artista } from '../model/Artista';
import { Musica } from '../model/Musica';
import ArtistaService from '../services/ArtistaService';
import MusicaService from '../services/MusicaService';
import '../styles/components/MusicaCad.css';

export function MusicaCad(props: any) {
  const { match: { params: { id } } } = props;
  const history = useHistory();
  const [nomeMusica, setNomeMusica] = useState('');
  const [artistaId, setArtistaId] = useState<number>();
  const [albumId, setAlbumId] = useState<number>();
  const [artistas, setArtistas] = useState<Artista[]>([]);
  const [albums, setAlbuns] = useState<Album[]>([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
    showLoader();
    if (id) {
      MusicaService.retrieveMusicaById(id).then((resMusicas) => {
        setNomeMusica(resMusicas.data.nome);
        setAlbumId(resMusicas.data.album.id);
        setArtistaId(resMusicas.data.artista.id);
        loadAlbums(resMusicas.data.artista.id);
        ArtistaService.retrieveArtistas().then((resArtistas) => {
          setArtistas(resArtistas.data);
        });
      });
    } else {
      ArtistaService.retrieveArtistas().then((resArtistas) => {
        setArtistas(resArtistas.data);
        setArtistaId(resArtistas.data[0].id);
        loadAlbums(resArtistas.data[0].id);
      });
    }
  }, [id]);

  useEffect(() => {
    if (artistaId) {
      loadAlbums(artistaId);
    }
  }, [artistaId]);

  function loadAlbums(artistaId: number) {
    ArtistaService.retrieveAlbumsByArtista(artistaId).then((resAlbuns) => {
      setAlbuns(resAlbuns.data);
      setAlbumId(resAlbuns.data[0].id);
      hideLoader();
    });
  }

  function saveMusica() {
    let musica: Musica = {
      id: id,
      nome: nomeMusica,
      album: albums.find(alb => alb.id! === albumId)!,
      artista: artistas.find(art => art.id! === artistaId)!
    };

    MusicaService.createMusica(musica).then((response) => {
      response.status === 200 ? history.goBack() : alert('Falha ao salvar!');
    });
  }

  function cancel() {
    history.push('/musicas');
  }

  return (
    <div className={"container"}>
      {loader}
      <div className={"box"} >
        <div className={"formCad"}>
          <h2>Cadastro</h2>
          <label> Música </label>
          <input placeholder="Nome da música" name="nomeMusica" value={nomeMusica}
            onChange={event => setNomeMusica(event.target.value)} />
          <br />
          <label> Artista </label>
          <select name="cmbArtista" value={artistaId} onChange={event => setArtistaId(Number(event.target.value))}>
            {artistas.map(artista =>
              <option key={artista.id} value={artista.id}>{artista.nome}</option>
            )}
          </select>
          <br />
          <label> Album </label>
          <select name="cmbAlbum" value={albumId} onChange={event => setAlbumId(Number(event.target.value))}>
            {albums.map(album =>
              <option key={album.id} value={album.id}>{album.titulo}</option>
            )}
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