import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Injectable({
  providedIn: "root"
})

export class FileService {
  constructor(private http: HttpClient) {}

  public uploadFile(file: File, saveLocation: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('filekey', file, file.name);
    return this.http.post(ConstantsEnum.backURL + ConstantsEnum.userAPIURL +
      ConstantsEnum.uploadFile + "?saveLocation=" + saveLocation, formData);
  }
}
