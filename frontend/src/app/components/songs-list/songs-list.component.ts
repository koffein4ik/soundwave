import {Component, Input, OnInit} from '@angular/core';
import { Song } from 'src/app/models/song.model';
import {Playlist} from "../../models/playlist.model";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {skip} from "rxjs/operators";

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.less']
})
export class SongsListComponent implements OnInit {

  @Input()
  currentPlaylist: Playlist;

  public currentSongPlaying: Song;
  public currentSongStopped: boolean = false;
  public componentName: string = "song-list";

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

  constructor(private playerStateService: PlayerStateService) { }

  ngOnInit() {
    console.log(this.currentPlaylist);
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
        console.log("in song list item waiting");
        this.playSongFromPlaylist(data.playlist, data.indexInPlaylist);
      }
    });
    // this.currentPlaylist = {
    //   name: "Initial",
    //   id: 1,
    //   pictureURL: "test",
    //   songs: this.playlistSongs
    // };
  }

  public playSongFromPlaylist(playlist: Playlist, index: number): void {
    this.currentPlaylist = playlist;
    this.currentSongPlaying = this.currentPlaylist.songs[index];
    this.currentSongStopped = false;
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
