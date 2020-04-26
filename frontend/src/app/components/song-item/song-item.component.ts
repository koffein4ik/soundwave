import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Song} from "../../models/song.model";

@Component({
  selector: 'app-song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.less']
})
export class SongItemComponent implements OnInit {

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
