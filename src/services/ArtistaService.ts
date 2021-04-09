import axios from "axios";

const SERVER = "https://crud-reactbackend.herokuapp.com";
const PATH = SERVER + '/artistas';
class ArtistaService {

    retrieveArtistas() {
        return axios.get(PATH);
    }

    retrieveAlbumsByArtista(idArtista: number) {
        return axios.get(`${PATH}/${idArtista}/albums`);
    }
}

export default new ArtistaService();