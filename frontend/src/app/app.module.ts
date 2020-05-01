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
import { SongItemComponent } from './components/song-item/song-item.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import {MatTabsModule} from "@angular/material/tabs";
import { SearchResultsItemComponent } from './components/search-results-item/search-results-item.component';
import { SearchResultsArtistsComponent } from './components/search-results-artists/search-results-artists.component';
import { ArtistInfoComponent } from './pages/artist-info/artist-info.component';
import { AlbumInfoComponent } from './pages/album-info/album-info.component';
import { PlaylistInfoComponent } from './pages/playlist-info/playlist-info.component';
import { ItemInfoComponent } from './components/item-info/item-info.component';
import { MainPageComponent } from './pages/main/main-page.component';
import { SearchResultsAlbumsComponent } from './components/search-results-albums/search-results-albums.component';

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
    SongItemComponent,
    SongsListComponent,
    SearchResultsComponent,
    SearchResultsItemComponent,
    SearchResultsArtistsComponent,
    ArtistInfoComponent,
    AlbumInfoComponent,
    PlaylistInfoComponent,
    ItemInfoComponent,
    MainPageComponent,
    SearchResultsAlbumsComponent,
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
    MatSelectModule,
    MatTabsModule
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
