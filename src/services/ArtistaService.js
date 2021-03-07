import axios from "axios";
import Routes from "../constants/routes";

class ArtistaService {

    retrieveArtistas(){
        return axios.get(`${Routes.URL_BASE}/artistas`);
    }

    retrieveAlbumsByArtista(idArtista) {
        return axios.get(`${Routes.URL_BASE}/artistas/${idArtista}/albums`);
    }

}

export default new ArtistaService();