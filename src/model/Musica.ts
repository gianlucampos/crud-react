import { Album } from './Album';
import { Artista } from './Artista';

export interface Musica {
  id: number;
  nome: string;
  artista: Artista;
  album: Album;
}

