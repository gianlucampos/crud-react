import '../styles/components/MusicaCad.css'

export function MusicaCad() {
  return (
    <div className={"container"}>
      <div className={"box"}>
        <div className={"formCad"}>
          <h2>Cadastro</h2>
          <label> Música </label>
          <input placeholder="Nome da música" name="nomeMusica" />
          <br/>
          <label> Artista </label>
          <input placeholder="Nome da música" name="nomeMusica" />
          <br/>
          <label> Album </label>
          <input placeholder="Nome da música" name="nomeMusica" />
        </div>
      </div>
    </div>
  );
}