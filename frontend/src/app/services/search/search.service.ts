import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConstantsEnum} from "../../constants/ConstantsEnum";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  constructor(private http: HttpClient) {}

  public search(searchRequest: string): Observable<any> {
    return this.http.post<string>(ConstantsEnum.backURL + ConstantsEnum.searchURL, {searchText:searchRequest});
  }
}

