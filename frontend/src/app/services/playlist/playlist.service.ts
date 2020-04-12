import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Injectable({
  providedIn: "root"
})

export class PlaylistService {
  constructor(private http: HttpClient) {}

  public getUserPlaylists(): Observable<any> {
    return this.http.get(ConstantsEnum.backURL + ConstantsEnum.userAPIURL +
      ConstantsEnum.playlistAPIURL +  ConstantsEnum.getPlaylists);
  }
}
