import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  public loginError: boolean = false;
  public loginSuccess: boolean = false;

  public ngOnInit(): void {
  }

  public onClickSubmit(loginData): void {
    const userData = {nickname: loginData.nickname, password: loginData.password};
    this.authService.login(userData).subscribe(data => {
      this.authService.setToken(data);
      this.loginError = false;
      this.loginSuccess = true;
      this.authService.userAuthorized.next(true);
    }, error => {
      this.loginSuccess = false;
      this.loginError = true;
    })
  }

  public authTest(): void {
    this.authService.test().subscribe(data => {
      console.log(data);
    })
  }

}
