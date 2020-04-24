import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from "./pages/registrationPage/registration-page.component";
import { LoginPageComponent } from "./pages/loginPage/login-page.component";
import { UserPageComponent } from "./pages/userPage/user-page.component";
import { UserPlaylistsComponent } from './components/user-playlists/user-playlists.component';


const routes: Routes = [
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'playlists', component: UserPlaylistsComponent}
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
