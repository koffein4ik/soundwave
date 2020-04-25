import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationPageComponent} from "./pages/registrationPage/registration-page.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatSliderModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatCardModule
} from "@angular/material";
import {FormsModule} from "@angular/forms";
import {LoginPageComponent} from './pages/loginPage/login-page.component';
import {HeaderComponent} from './components/header/header.component';
import {PlayerComponent} from './components/player/player.component';
import {SearchComponent} from './components/search/search.component';
import {AuthInterceptor} from "./interceptors/auth-interceptor";
import { PlayerPlaylistComponent } from './components/player-playlist/player-playlist.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { PlaylistSongComponent } from './components/playlist-song/playlist-song.component';
import { UserPageComponent } from './pages/userPage/user-page.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { CreatePlaylistComponent } from './components/create-playlist-service/create-playlist.component';
import { UserPlaylistsComponent } from './components/user-playlists/user-playlists.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { RadioPageComponent } from './pages/radio-page/radio-page.component';
import { GenreItemComponent } from './components/genre-item/genre-item.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationPageComponent,
    UserPlaylistsComponent,
    LoginPageComponent,
    HeaderComponent,
    PlayerComponent,
    SearchComponent,
    PlayerPlaylistComponent,
    PlaylistSongComponent,
    UserPageComponent,
    FileUploaderComponent,
    CreatePlaylistComponent,
    PlaylistItemComponent,
    RadioPageComponent,
    GenreItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSliderModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
