import '../styles/components/MusicaFilter.css';
import { FaPlusCircle } from 'react-icons/fa';

export function MusicaFilter() {
  return (
    <div className={"containerTable"}>
      <div className={"tableTitle"}>
        <div className={"row"}>
          <div className={"title"}> Músicas </div>
          <button>
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
          <tr key={1}>
            <td>1</td>
            <td>All the small things</td>
            <td>The Enema of State</td>
            <td>Blink-182</td>
            <td>Excluir</td>
          </tr>
          <tr key={2}>
            <td>1</td>
            <td>All the small things</td>
            <td>The Enema of State</td>
            <td>Blink-182</td>
            <td>Excluir</td>
          </tr>
          <tr key={3}>
            <td>1</td>
            <td>All the small things</td>
            <td>The Enema of State</td>
            <td>Blink-182</td>
            <td>Excluir</td>
          </tr>
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