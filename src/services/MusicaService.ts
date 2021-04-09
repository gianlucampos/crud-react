import axios from "axios";
import { Musica } from "../model/Musica";

const SERVER = "https://crud-reactbackend.herokuapp.com";
const PATH = SERVER + '/musicas';
class MusicaService {

    createMusica(musica: Musica) {
        return axios.post(PATH, musica);
    }

    retrieveMusicaById(id: number) {
        return axios.get(`${PATH}/${id}`);
    }

    retriveMusicas() {
        return axios.get(PATH);
    }

    deleteMusica(id: number) {
        return axios.delete(`${PATH}/${id}`)
    }
}

export default new MusicaService();