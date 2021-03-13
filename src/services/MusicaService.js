import axios from "axios";
import Routes from "../constants/routes";

const PATH = Routes.URL_BASE + '/musicas';
class MusicaService {

    createMusica(musica) {
        return axios.post(PATH, musica);
    }

    retrieveMusicaById(id) {
        return axios.get(`${PATH}/${id}`);
    }

    retriveMusicas() {
        return axios.get(PATH);
    }

    deleteMusica(id) {
        return axios.delete(`${PATH}/${id}`)
    }
}

export default new MusicaService();