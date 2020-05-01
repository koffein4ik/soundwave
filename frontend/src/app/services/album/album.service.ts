import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient) { }

  public getAlbumById(id: string): Observable<any> {
    return this.http.get(ConstantsEnum.backURL + ConstantsEnum.album + id);
  }
}
