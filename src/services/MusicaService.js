const URL_BASE_TESTE = "https://jsonplaceholder.typicode.com/todos/1";
const URL_BASE = "http://localhost:8082";

class MusicaService {

    testeAjax() {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                document.getElementById("demo").innerHTML = this.responseText;
            }
        };
        xhttp.open("GET", URL_BASE_TESTE, true);
        xhttp.send();
    }

    findMusicas() {
        return [
            {
                id: 1,
                nome: 'Dani California',
                artista: {
                    nome: 'Red Hot Chili Peppers',
                    genero: 'Funky-Rock-Punky-Indie'
                },
                album: {
                    titulo: 'Stadium Arcadium',
                    anoLancamento: 2006,
                    capa: null,
                }
            },
            {
                id: 2,
                nome: 'Snow (Hey Oh)',
                artista: {
                    nome: 'Red Hot Chili Peppers',
                    genero: 'Funky-Rock-Punky-Indie'
                },
                album: {
                    titulo: 'Stadium Arcadium',
                    anoLancamento: 2006,
                    capa: null,
                }
            }
        ];
    }

    createMusica(musica) {
        // Tentar fazer com ajax caso não de certo
        // Usar axios
        // return axios.post(URL, musica);
    }


}

export default new MusicaService();