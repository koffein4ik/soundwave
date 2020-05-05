import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/song.model";
import {PlaylistService} from "../../services/playlist/playlist.service";
import {Playlist} from "../../models/playlist.model";
import {AuthService} from "../../services/auth/auth.service";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {skip} from "rxjs/operators";

@Component({
  selector: 'app-player-playlist',
  templateUrl: './player-playlist.component.html',
  styleUrls: ['./player-playlist.component.less']
})
export class PlayerPlaylistComponent implements OnInit {

  constructor(private playlistService: PlaylistService,
              private authService: AuthService,
              private playerStateService: PlayerStateService) {
  }

  public currentSongPlaying: Song;
  public currentPlaylist: Playlist;
  public currentSongStopped: boolean = false;
  public playlists: Playlist[] = [];
  private componentName: string = "player-playlist";

  public playlistSongs: Song[] = [];

  public ngOnInit(): void {
    this.playerStateService.pauseCurrentSongObservable$.pipe(skip(1)).subscribe((sender: string) => {
      if (sender !== this.componentName) {
        this.stopCurrentSong(false);
      }
    });
    this.playerStateService.resumeCurrentSongObservable$.pipe(skip(1)).subscribe((sender: string) => {
      if (sender !== this.componentName) {
        this.playCurrentSong(false);
      }
    });
    this.playerStateService.playPlaylistObservable$.pipe(skip(1)).subscribe((data: {playlist: Playlist, indexInPlaylist: number, sender: string}) => {
      if (data.sender !== this.componentName) {
        this.playSongFromPlaylist(data.playlist, data.indexInPlaylist);
      }
    });
    if (this.authService.hasValidToken()) {
      this.playlistService.getUserPlaylists().subscribe((data: Playlist[]) => {
        this.playlists = data;
        console.log(this.playlists);
      })
    }
  }

  public playSongFromPlaylist(playlist: Playlist, index: number): void {
    console.log(playlist);
    this.currentPlaylist = playlist;
    this.currentSongPlaying = this.currentPlaylist.songs[index];
    this.currentSongStopped = false;
  }

  public toggleDrawer(drawer): void {
    drawer.toggle();
  }

  public changeCurrentSongPlaying(song: Song): void {
    const data = {
      playlist: this.currentPlaylist,
      indexInPlaylist: this.currentPlaylist.songs.indexOf(song),
      sender: this.componentName
    };
    this.playerStateService.playPlaylist.next(data);
    this.currentSongPlaying = song;
    this.currentSongStopped = false;
  }

  public stopCurrentSong(emitNext: boolean): void {
    if (emitNext) {
      this.playerStateService.pauseCurrentSong.next(this.componentName);
    }
    this.currentSongStopped = true;
  }

  public playCurrentSong(emitNext: boolean): void {
    if (emitNext) {
      this.playerStateService.resumeCurrentSong.next(this.componentName);
    }
    this.currentSongStopped = false;
  }

}
