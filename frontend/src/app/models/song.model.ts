import {Album} from "./album.model";
import {Artist} from "./artist.model";

export class Song {
  id: number;
  name: string;
  songURL: string;
  artist: Artist;
  album: Album;
}
