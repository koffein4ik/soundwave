import {Album} from "./album.model";
import {Artist} from "./artist.model";

export class Song {
  id: number;
  name: string;
  url: string;
  artists: Artist[];
  album: Album;
  picture_url: string;
}
