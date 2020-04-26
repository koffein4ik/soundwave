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
  changeSong = new EventEmitter<any>();

  @Output()
  stopCurrentSong = new EventEmitter<any>();

  hover: string = 'hidden';

  constructor() { }

  ngOnInit() {
    console.log(this.song);
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

  playSong(){
    if(this.song != this.currentSongPlaying)
      this.changeSong.emit();
    else
      this.playCurrentSong.emit()
  }

}


//      <img [src]="song.album.pictureURL">
