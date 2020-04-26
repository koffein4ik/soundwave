import {Artist} from "./artist.model";
import {Album} from "./album.model";
import {Song} from "./song.model";

export class SearchResults {
  artists: Artist[];
  albums: Album[];
  songs: Song[];
}
