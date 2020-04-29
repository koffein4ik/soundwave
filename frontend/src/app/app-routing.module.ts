import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationPageComponent } from "./pages/registrationPage/registration-page.component";
import { LoginPageComponent } from "./pages/loginPage/login-page.component";
import { UserPageComponent } from "./pages/userPage/user-page.component";
import { UserPlaylistsComponent } from './components/user-playlists/user-playlists.component';
import {RadioPageComponent} from "./pages/radio-page/radio-page.component";
import {SearchResultsComponent} from "./components/search-results/search-results.component";
import {ArtistInfoComponent} from "./pages/artist-info/artist-info.component";
import {AlbumInfoComponent} from "./pages/album-info/album-info.component";
import {PlaylistInfoComponent} from "./pages/playlist-info/playlist-info.component";


const routes: Routes = [
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'playlists', component: UserPlaylistsComponent},
  {path: 'radio', component: RadioPageComponent},
  {path: 'search/:text', component: SearchResultsComponent},
  {path: 'artist/:id', component: ArtistInfoComponent},
  {path: 'album/:id', component: AlbumInfoComponent},
  {path: 'playlist/:id', component: PlaylistInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
