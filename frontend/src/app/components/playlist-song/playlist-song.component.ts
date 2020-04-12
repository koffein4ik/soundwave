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

  hover: string = 'hidden';

  constructor() { }

  ngOnInit() {
  }

  get songIconVisibility(): string
  {
    if( this.currentSongPlaying !== this.song) {
       return this.hover;
    }
    else if( this.currentSongStopped){
      return 'visible'
    }
    else if(!this.currentSongStopped && this.hover == 'visible') {
      return this.hover;
    }

    return 'hidden'
  }

  get bubbleVisibility(): string
  {
    if( this.currentSongPlaying == this.song && !this.currentSongStopped && this.hover == 'hidden') {
      return "visible";
    }
    return 'hidden'
  }


}


//      <img [src]="song.album.pictureURL">