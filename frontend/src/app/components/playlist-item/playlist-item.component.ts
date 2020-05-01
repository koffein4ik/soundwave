import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";

import { Playlist } from 'src/app/models/playlist.model';
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.less']
})
export class PlaylistItemComponent implements OnInit, OnChanges {

  @Input()
  playlist: Playlist;

  @Input()
  isPlaying: boolean = false;

  @Input()
  isCurrentPlaylistPlaying: boolean = false;

  @Output()
  playPlaylist = new EventEmitter<any>();

  @Output()
  playAnotherPlaylist = new EventEmitter<any>();

  @Output()
  stopPlaying = new EventEmitter<any>();

  hover: string = 'hidden';

  constructor() { }

  public ngOnInit(): void {
    console.log(this.playlist.pictureURL);
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

}
