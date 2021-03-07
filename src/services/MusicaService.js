import axios from "axios";
import Album from "../model/Album";
import Routes from "../constants/routes";

class MusicaService {

    createMusica(musica) {
        return axios.post(URL, musica);
    }

    retrieveMusicaById(id) { 
        return axios.get(`${Routes.URL_BASE}/musicas/${id}`);
    }

    retriveMusicas() {
        return axios.get(`${Routes.URL_BASE}/musicas`);
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