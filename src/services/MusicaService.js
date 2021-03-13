import axios from "axios";
import Routes from "../constants/routes";

class MusicaService {

    createMusica(musica) {
        return axios.post(`${Routes.URL_BASE}/musicas`, musica);
    }

    retrieveMusicaById(id) { 
        return axios.get(`${Routes.URL_BASE}/musicas/${id}`);
    }

    retriveMusicas() {
        return axios.get(`${Routes.URL_BASE}/musicas`);
    }
}

export default new MusicaService();