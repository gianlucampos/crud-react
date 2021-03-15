import axios from "axios";
import Routes from "../constants/routes";

class ArtistaService {

    retrieveArtistas(){
        return axios.get(`${Routes.URL_BASE_PROD}/artistas`);
    }

    retrieveAlbumsByArtista(idArtista) {
        return axios.get(`${Routes.URL_BASE_PROD}/artistas/${idArtista}/albums`);
    }

}

export default new ArtistaService();