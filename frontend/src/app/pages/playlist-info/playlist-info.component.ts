import { Component, OnInit } from '@angular/core';
import {PlaylistService} from "../../services/playlist/playlist.service";
import {ActivatedRoute} from "@angular/router";
import {Playlist} from "../../models/playlist.model";

@Component({
  selector: 'app-playlist-info',
  templateUrl: './playlist-info.component.html',
  styleUrls: ['./playlist-info.component.less']
})
export class PlaylistInfoComponent implements OnInit {

  public playlist: Playlist;
  public error: boolean = false;

  constructor(private playlistService: PlaylistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.playlistService.getPlaylistById(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(data);
      this.playlist = data.playlist;
      this.playlist.pictureURL = "http://" + this.playlist.pictureURL;
      this.playlist.songs = data.songs;
    }, error => {
      this.error = true;
    })
  }

}
