import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song} from "../../models/song.model";

@Component({
  selector: 'app-playlist-song',
  templateUrl: './playlist-song.component.html',
  styleUrls: ['./playlist-song.component.less']
})
export class PlaylistSongComponent implements OnInit {

  @Input()
  song: Song;

  @Input()
  currentSongStopped: boolean;

  @Input()
  currentSongPlaying: Song;

  @Output()
  playCurrentSong = new EventEmitter<any>();

  @Output()
  stopCurrentSong = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
