import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public getArtistInfoById(id: number): Observable<any> {
    return this.http.get<any>(ConstantsEnum.backURL + ConstantsEnum.getArtistInfoById  + id);
  }
}
