import {Song} from "./song.model";

export class Playlist {
  id: number;
  name: string;
  pictureURL: string;
  songs: Song[];
}
