import {Song} from "./song.model";

export class Playlist {
  id: number;
  userId: number;
  name: string;
  pictureURL: string;
  songs: Song[];
  shared: number;
}
