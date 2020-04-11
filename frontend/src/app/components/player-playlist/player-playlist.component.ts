import {Component, OnInit} from '@angular/core';
import {Song} from "../../models/song.model";

@Component({
  selector: 'app-player-playlist',
  templateUrl: './player-playlist.component.html',
  styleUrls: ['./player-playlist.component.less']
})
export class PlayerPlaylistComponent implements OnInit {

  constructor() {
  }

  public currentSongPlaying: Song;
  public currentSongStopped: boolean = false;

  public playlistSongs: Song[] = [
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    },
    {
      name: "test",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:""
    }
  ];

  public toggleDrawer(drawer): void {
    drawer.toggle();
  }

  public changeCurrentSongPlaying(song: Song): void {
    console.log("in change current playlist song");
    console.log(song);
    this.currentSongPlaying = song;
    this.currentSongStopped = false;
  }

  public stopCurrentSong(): void {
    this.currentSongStopped = true;
  }

  public playCurrentSong(): void {
    this.currentSongStopped = false;
  }

  public playNextSong(): void {
    let currentSongIndex = this.playlistSongs.indexOf(this.currentSongPlaying);
    if (currentSongIndex < (this.playlistSongs.length - 1)) {
      this.currentSongPlaying = this.playlistSongs[currentSongIndex + 1];
    } else {
      this.currentSongPlaying = this.playlistSongs[0];
    }
  }

  public playPreviousSong(): void {
    let currentSongIndex = this.playlistSongs.indexOf(this.currentSongPlaying);
    if (currentSongIndex > 0) {
      this.currentSongPlaying = this.playlistSongs[currentSongIndex - 1];
    } else {
      this.currentSongPlaying = this.playlistSongs[this.playlistSongs.length - 1];
    }
  }

  ngOnInit() {
  }

}
