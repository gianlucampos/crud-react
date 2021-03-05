import Musica from "../model/Musica";
import Album from "../model/Album";
import Artista from "../model/Artista";
import axios from "axios";


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

    retrieveMusicaById(id) {
        let artista = new Artista(1, 'Red Hot Chili Peppers', 'Funky-Rock-Punky-Indie');
        let album = new Album(1, 'Stadium Arcadium', 2006);
        let musica = new Musica(1, 'Dani California', album, artista);

        let artista2 = new Artista(2, 'Blink-182', 'Punk-Rock-Pop-Indie');
        let album2 = new Album(4, 'Enema of State', 1999);
        let musica2 = new Musica(4, 'All The Small things', album, artista);
        return id === '1' ? musica : musica2;
    }

    retrieveMusicaById2(id) { 
        return axios.get(`${URL_BASE}/musicas/${id}`);
    }


    retriveMusicas() {
        return axios.get(`${URL_BASE}/musicas`);
    }

    createMusica(musica) {
        // Tentar fazer com ajax caso não de certo
        // Usar axios
        // return axios.post(URL, musica);
    }

    retrieveAlbumsByArtista(artista) {
        let album1 = new Album(1, 'Blood Sugar Sex Magik', 1991);
        let album2 = new Album(2, 'Californication', 1999);
        let album3 = new Album(3, 'Stadium Arcadium', 2006);
        let album4 = new Album(4, 'Enema of State', 1999);
        let album5 = new Album(5, 'California', 2016);
        if (artista.id === 1) {
            return [album1, album2, album3];
        }
        if (artista.id === 2) {
            return [album4, album5];
        }
        return 'Sem albuns cadastrados';
    }


}

export default new MusicaService();