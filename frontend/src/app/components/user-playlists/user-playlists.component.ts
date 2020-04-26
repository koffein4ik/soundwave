import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Playlist} from 'src/app/models/playlist.model';
import {Song} from "../../models/song.model";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {skip} from "rxjs/operators";

@Component({
  selector: 'user-playlists',
  templateUrl: './user-playlists.component.html',
  styleUrls: ['./user-playlists.component.less']
})
export class UserPlaylistsComponent implements OnInit {

  public currentPlaylistPlaying: Playlist;
  public currentPlaylistStopped: boolean = false;
  public componentName: string = "user-playlists";

  public playlistSongs: Song[] = [
    {
      name: "Now it's perfect",
      artist: {name: "ширан", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231,
      songURL: "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3"
    },
    {
      name: "4 украинки",
      artist: {name: "морген", id: 12},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/9185888.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL: "https://dl2.mp3party.net/online/8711736.mp3"
    }
  ];

  playlists: Playlist[] = [
    {
      id: 1,
      name: "Последний министр",
      pictureURL: "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Пыль",
      pictureURL: "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Жить в кайф",
      pictureURL: "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Последний министр",
      pictureURL: "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Пыль",
      pictureURL: "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Жить в кайф",
      pictureURL: "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Последний министр",
      pictureURL: "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Пыль",
      pictureURL: "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Жить в кайф",
      pictureURL: "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Последний министр",
      pictureURL: "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Пыль",
      pictureURL: "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Жить в кайф",
      pictureURL: "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Последний министр",
      pictureURL: "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Пыль",
      pictureURL: "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Жить в кайф",
      pictureURL: "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Последний министр",
      pictureURL: "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Пыль",
      pictureURL: "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200",
      songs: this.playlistSongs
    },
    {
      id: 1,
      name: "Жить в кайф",
      pictureURL: "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200",
      songs: this.playlistSongs
    }
  ];

  constructor(private playerStateService: PlayerStateService) {
  }

  public ngOnInit(): void {
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
