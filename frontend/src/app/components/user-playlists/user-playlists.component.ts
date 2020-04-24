import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Playlist } from 'src/app/models/playlist.model';

@Component({
  selector:     'user-playlists',
  templateUrl:  './user-playlists.component.html',
  styleUrls:   ['./user-playlists.component.less']
})
export class UserPlaylistsComponent implements OnInit {

    playlists : Playlist[] = [
        { id: 1, name : "Последний министр", pictureURL : "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200", songs : []},
        { id: 1, name : "Пыль", pictureURL : "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200", songs : [] },
        { id: 1, name : "Жить в кайф", pictureURL : "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200", songs : [] },
        { id: 1, name : "Последний министр", pictureURL : "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200", songs : []},
        { id: 1, name : "Пыль", pictureURL : "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200", songs : [] },
        { id: 1, name : "Жить в кайф", pictureURL : "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200", songs : [] },
        { id: 1, name : "Последний министр", pictureURL : "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200", songs : []},
        { id: 1, name : "Пыль", pictureURL : "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200", songs : [] },
        { id: 1, name : "Жить в кайф", pictureURL : "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200", songs : [] },
        { id: 1, name : "Последний министр", pictureURL : "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200", songs : []},
        { id: 1, name : "Пыль", pictureURL : "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200", songs : [] },
        { id: 1, name : "Жить в кайф", pictureURL : "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200", songs : [] },
        { id: 1, name : "Последний министр", pictureURL : "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200", songs : []},
        { id: 1, name : "Пыль", pictureURL : "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200", songs : [] },
        { id: 1, name : "Жить в кайф", pictureURL : "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200", songs : [] },
        { id: 1, name : "Последний министр", pictureURL : "https://avatars.yandex.net/get-music-content/2789402/47ea6ff3.a.10219198-1/200x200", songs : []},
        { id: 1, name : "Пыль", pictureURL : "https://avatars.yandex.net/get-music-content/2114230/0c897710.a.9647864-1/200x200", songs : [] },
        { id: 1, name : "Жить в кайф", pictureURL : "https://avatars.yandex.net/get-music-content/49876/a79d3ed6.a.1683700-1/200x200", songs : [] }
    ]

    constructor() { }

    ngOnInit() {
    }
}
