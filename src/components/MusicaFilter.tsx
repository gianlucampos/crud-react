import '../styles/components/MusicaFilter.css';

export function MusicaFilter() {
  return (
    <div className={"containerTable"}>
      <div className={"tableTitle"}>
        <p> Músicas </p>
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
      </div>
    </div>
  );
}