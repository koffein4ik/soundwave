import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Genre} from "../../models/genre.model";
import {ConstantsEnum} from "../../constants/ConstantsEnum";
import {Song} from "../../models/song.model";

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }

  public getGenres(): Observable<Genre[]> {
    return this.http.get<Genre[]>(ConstantsEnum.backURL + ConstantsEnum.genres);
  }

  public getSongsByGenreId(id: number): Observable<Song[]> {
    return this.http.get<Song[]>(ConstantsEnum.backURL + ConstantsEnum.genres + "/" + ConstantsEnum.getSongsByGenreId +id);
  }
}
