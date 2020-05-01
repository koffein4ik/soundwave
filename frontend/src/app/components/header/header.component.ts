import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {skip} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  public isUserAuthorized: boolean = false;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    if (this.authService.hasValidToken()) {
      this.isUserAuthorized = true;
    }
    this.authService.userAuthorizedObservable$.pipe(skip(1)).subscribe(value => {
      this.isUserAuthorized = value;
    })
  }

  public logOutClick(): void {
    this.isUserAuthorized = false;
    this.authService.userAuthorized.next(false);
    this.authService.logOut();
  }

}
