import { FaEdit, FaPlusCircle, FaTrash } from 'react-icons/fa';
import { useHistory } from 'react-router';
import { Musica } from '../model/Musica';
import '../styles/components/MusicaFilter.css';

export function MusicaFilter() {
  const history = useHistory();
  let musicas = [
    {
      id: 2,
      nome: 'Dani California',
      album: { id: 1, titulo: 'Stadium Arcadium' },
      artista: { id: 1, nome: 'Red Hot Chili Peppers' }
    },
    {
      id: 1,
      nome: 'All the small things',
      album: { id: 1, titulo: 'The Enema of State' },
      artista: { id: 1, nome: 'Blink-182' }
    },
    {
      id: 3,
      nome: 'Snow Hey Oh',
      album: { id: 1, titulo: 'Stadium Arcadium' },
      artista: { id: 1, nome: 'Red Hot Chili Peppers' }
    }
  ];
  sortMusicas(musicas);

  function addMusica() {
    history.push('/musicas/create');
  }

  function sortMusicas(m: Musica[]) {
    m.sort((a, b) => {
      if (a.artista.nome === b.artista.nome) {
        return 0;
      }
      if (a.artista.nome > b.artista.nome) {
        return 1;
      }
      return -1;
    });
  }

  return (
    <div className={"containerTable"}>
      <div className={"tableTitle"}>
        <div className={"row"}>
          <div className={"title"}> Músicas </div>
          <button onClick={addMusica}>
            <FaPlusCircle type="button" className="iconButton" />Adicionar Música
          </button>
        </div>
      </div>
      <table>
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
          {musicas.map(
            musica =>
              <tr key={musica.id}>
                <td>{musicas.indexOf(musica) + 1}</td>
                <td>{musica.nome}</td>
                <td>{musica.album.titulo}</td>
                <td>{musica.artista.nome}</td>
                <td>
                  <FaEdit color="green" title="Editar"
                    className={"iconButton"}
                  />
                  <FaTrash color="red" title="Excluir"
                    className={"iconButton"}
                  />
                </td>
              </tr>
          )}
        </tbody>
      </table>
      <div className={"tableBottom"}>
        <div className={"hintText"}>Exibindo 5 de 25 resultados</div>
        <ul className={"pagination"}>
          <li className={"pageItem"}><a className={"pageLink"} href="##"> Anterior</a></li>
          <li className="pageItem active"><a href="##" className={"pageLink"}>1</a></li>
          <li className={"pageItem"}><a href="##" className={"pageLink"}>2</a></li>
          <li className={"pageItem"}><a href="##" className={"pageLink"}>3</a></li>
          <li className={"pageItem"}><a href="##" className={"pageLink"}>4</a></li>
          <li className={"pageItem"}><a href="##" className={"pageLink"}>5</a></li>
          <li className={"pageItem"}><a href="##" className={"pageLink"}>Próximo</a></li>
        </ul>
      </div>
    </div>
  );
}