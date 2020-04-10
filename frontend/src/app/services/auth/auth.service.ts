import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ConstantsEnum} from "../../constants/ConstantsEnum";
import {Observable} from "rxjs";
import * as moment from "moment";

@Injectable({
  providedIn: "root"
})

export class AuthService {
  constructor(private http: HttpClient) {}

  private readonly localStorageToken = "token";
  private readonly localStorageExpirationDate = "token_expiration";

  public login(userdata: {nickname: string, password: string}): Observable<any> {
    return this.http.post(ConstantsEnum.backURL + ConstantsEnum.loginURL, userdata);
  }

  public setToken(authData: {token: any, login: string, exp: string}): void {
    const expiresAt = moment().add(authData.exp,'second');
    localStorage.setItem(this.localStorageToken, authData.token);
    localStorage.setItem(this.localStorageExpirationDate, JSON.stringify(expiresAt.valueOf()));
  }

  public logOut(): void {
    localStorage.removeItem(this.localStorageToken);
    localStorage.removeItem(this.localStorageExpirationDate);
  }

  public hasValidToken(): boolean {
    return this.getToken() && (moment() < this.getExpiration());
  }

  public getExpiration(): any {
    const expiration = localStorage.getItem(this.localStorageExpirationDate);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  public getToken(): string {
    return localStorage.getItem(this.localStorageToken);
  }

  public test(): Observable<any> {
    return this.http.get(ConstantsEnum.backURL + "authtest");
  }
}
