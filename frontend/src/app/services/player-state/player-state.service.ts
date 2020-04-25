import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PlayerStateService {

  public pauseCurrentSong = new BehaviorSubject<any>({});
  public pauseCurrentSongObservable$ = this.pauseCurrentSong.asObservable();

  public playPlaylist = new BehaviorSubject<any>({});
  public playPlaylistObservable$ = this.playPlaylist.asObservable();

  public resumeCurrentSong = new BehaviorSubject<any>({});
  public resumeCurrentSongObservable$ = this.resumeCurrentSong.asObservable();

  constructor() {
  }
}
