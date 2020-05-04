import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from 'src/app/models/playlist.model';
import {Song} from "../../models/song.model";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {skip} from "rxjs/operators";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'user-playlists',
  templateUrl: './user-playlists.component.html',
  styleUrls: ['./user-playlists.component.less']
})
export class UserPlaylistsComponent implements OnInit {

  public currentPlaylistPlaying: Playlist;
  public currentPlaylistStopped: boolean = false;
  public componentName: string = "user-playlists";
  public playlists: Playlist[];

  constructor(private playerStateService: PlayerStateService, private playlistService: PlaylistService) {
  }

  public ngOnInit(): void {
    this.updatePlaylists();
    this.playlistService.playlistUpdateObservable$.pipe(skip(1)).subscribe(() => this.updatePlaylists());
    this.playerStateService.pauseCurrentSongObservable$.pipe(skip(1)).subscribe((sender: string) => {
      if (sender !== this.componentName) {
        this.stopCurrentPlaylist(false);
      }
    });
    this.playerStateService.resumeCurrentSongObservable$.pipe(skip(1)).subscribe((sender: string) => {
      if (sender !== this.componentName) {
        this.playCurrentPlaylist(false);
      }
    });
  }

  public updatePlaylists(): void {
    this.playlistService.getUserPlaylists().subscribe(playlists => {
      this.playlists = playlists;
      this.playlists.forEach(playlist => {
        console.log(playlist);
        playlist.songs.forEach(song => {
          song.url = ConstantsEnum.backURL + ConstantsEnum.songs + song.url;
          song.picture_url = ConstantsEnum.backURL + ConstantsEnum.images + ConstantsEnum.songs + song.picture_url;
        });
      });
      console.log(this.playlists);
    });
  }

  public changeCurrentPlaylistPlaying(newPlaylist: Playlist): void {
    if (!newPlaylist.songs || newPlaylist.songs.length === 0) return;
    const data = {
      playlist: newPlaylist,
      indexInPlaylist: 0,
      sender: this.componentName
    };
    this.playerStateService.playPlaylist.next(data);
    this.currentPlaylistPlaying = newPlaylist;
    this.currentPlaylistStopped = false;
  }

  public stopCurrentPlaylist(emitNext: boolean): void {
    if (emitNext) {
      this.playerStateService.pauseCurrentSong.next(this.componentName);
    }
    this.currentPlaylistStopped = true;
  }

  public playCurrentPlaylist(emitNext: boolean): void {
    if (emitNext) {
      this.playerStateService.resumeCurrentSong.next(this.componentName);
    }
    this.currentPlaylistStopped = false;
  }

  public gerRecommendations(){
    this.playlistService.getRecomendationPlaylist().subscribe(data => {
        data.forEach(song => {
          song.url = ConstantsEnum.backURL + ConstantsEnum.songs + song.url;
          song.picture_url = ConstantsEnum.backURL + ConstantsEnum.images + ConstantsEnum.songs + song.picture_url;
        });
      const newPlaylist: Playlist = {
        name: 'recommendation',
        userId: -1,
        pictureURL: '',
        songs: data,
        shared: 0,
        id: -1
      };
      const dataToPlay = {
        playlist: newPlaylist,
        indexInPlaylist: 0,
        sender: this.componentName
      };
      this.playerStateService.playPlaylist.next(dataToPlay);
    });
  }
}
