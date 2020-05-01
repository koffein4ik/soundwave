import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from 'src/app/models/playlist.model';
import {Song} from "../../models/song.model";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {skip} from "rxjs/operators";
import {PlaylistService} from "../../services/playlist/playlist.service";

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

  public playlistSongs: Song[] = [
    {
      name: "Now it's perfect",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      picture_url: ""
    },
    {
      name: "4 украинки",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/9185888.mp3",
      picture_url: ""
    },
    {
      name: "саб урбан",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/8711736.mp3",
      picture_url: ""
    },
    {
      name: "саб урбан",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/8711736.mp3",
      picture_url: ""
    },
    {
      name: "саб урбан",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/8711736.mp3",
      picture_url: ""
    },
    {
      name: "саб урбан",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/8711736.mp3",
      picture_url: ""
    },
    {
      name: "саб урбан",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/8711736.mp3",
      picture_url: ""
    },
    {
      name: "саб урбан",
      artists: [{name: "ширан", artist_id: 123, picture_url: ''}],
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, url:"https://dl2.mp3party.net/online/8711736.mp3",
      picture_url: ""
    }
  ];

  constructor(private playerStateService: PlayerStateService, private playlistService: PlaylistService) {
  }

  public ngOnInit(): void {
    this.playlistService.getUserPlaylists().subscribe(playlists => {
      console.log(playlists);
      this.playlists = playlists;
    });
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

  public changeCurrentPlaylistPlaying(newPlaylist: Playlist): void {
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
}
