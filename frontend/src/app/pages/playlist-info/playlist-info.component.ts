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

  constructor(private playlistService: PlaylistService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.playlistService.getPlaylistById(this.route.paramMap['id']).subscribe(data => {
      console.log(data);
      this.playlist = data;
    })
  }

}
