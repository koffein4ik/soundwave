import { Component, OnInit } from '@angular/core';
import { Song } from 'src/app/models/song.model';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.less']
})
export class SongsListComponent implements OnInit {

  public playlistSongs: Song[] = [
    {
      name: "перфект",
      artist: {name: "ширан", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3"
    },
    {
      name: "4 украинки",
      artist: {name: "морген", id: 12},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/9185888.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/8711736.mp3"
    },
    {
      name: "саб урбан",
      artist: {name: "John", id: 123},
      album: {
        name: "first",
        id: 123,
        pictureURL: "https://avatars.yandex.net/get-music-content/2358262/915e8ce0.a.10263806-1/50x50"
      },
      id: 231, songURL:"https://dl2.mp3party.net/online/8711736.mp3"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
