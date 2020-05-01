import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConstantsEnum} from "../../constants/ConstantsEnum";
import {Artist} from "../../models/artist.model";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private http: HttpClient) { }

  public getArtistInfoById(id: string): Observable<any> {
    return this.http.get<any>(ConstantsEnum.backURL + ConstantsEnum.getArtistInfoById  + id);
  }
}
