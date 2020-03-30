import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {RegistrationModel} from "../../models/registration.model";

@Injectable({
  providedIn: "root"
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  public register(regData: RegistrationModel): any {
    return this.http.post<any>("http://localhost:3000/registration", regData);
  }
}
