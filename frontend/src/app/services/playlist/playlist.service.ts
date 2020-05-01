import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConstantsEnum} from "../../constants/ConstantsEnum";
import {Playlist} from "../../models/playlist.model";

@Injectable({
  providedIn: "root"
})

export class PlaylistService {
  constructor(private http: HttpClient) {
  }

  public getUserPlaylists(): Observable<any> {
    return this.http.get(ConstantsEnum.backURL + ConstantsEnum.userAPIURL +
      ConstantsEnum.playlistAPIURL + ConstantsEnum.getPlaylists);
  }

  public createNewPlaylist(playlistName: string, picture: File): Observable<any> {
    const requestBody = {
      playlistName: playlistName,
      picture: picture
    };
    return this.http.post(ConstantsEnum.backURL + ConstantsEnum.userAPIURL +
      ConstantsEnum.playlistAPIURL + ConstantsEnum.createPlaylist, requestBody);
  }

  public addSongToPlaylist(playlistId: number, songId: number) {
    const requestBody = {
      playlistId: playlistId,
      songId: songId
    };
    return this.http.post(ConstantsEnum.backURL + ConstantsEnum.userAPIURL +
      ConstantsEnum.playlistAPIURL + ConstantsEnum.addSongToPlaylist, requestBody);
  }

  public getPlaylistById(playlistId: string): Observable<Playlist> {
    return this.http.get<Playlist>(ConstantsEnum.backURL + ConstantsEnum.userAPIURL +
      ConstantsEnum.playlistAPIURL + playlistId);
  }
}
