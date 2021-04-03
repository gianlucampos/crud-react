import '../styles/components/MusicaFilter.css';

export function MusicaFilter() {
  return (
    <div className={"containerTable"}>
      <div className={"tableTitle"}>
        <p> Músicas </p>
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
          <li className="page-item"><a className="page-link" href="##"> Anterior</a></li>
          <li className="page-item active"><a href="##" className="page-link">1</a></li>
          <li className="page-item"><a href="##" className="page-link">2</a></li>
          <li className="page-item"><a href="##" className="page-link">3</a></li>
          <li className="page-item"><a href="##" className="page-link">4</a></li>
          <li className="page-item"><a href="##" className="page-link">5</a></li>
          <li className="page-item"><a href="##" className="page-link">Próximo</a></li>
        </ul>
      </div>
    </div>
  );
}