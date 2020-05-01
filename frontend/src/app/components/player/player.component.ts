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
import { AudioService } from "../../services/audio/audio.service";
import { StreamState } from "../../interfaces/stream-state";
import {Subject, Subscription} from "rxjs";
import {throttleTime} from "rxjs/operators";
import {Song} from "../../models/song.model";
import {Playlist} from "../../models/playlist.model";
import {AuthService} from "../../services/auth/auth.service";
import {PlayerStateService} from "../../services/player-state/player-state.service";
import {skip} from "rxjs/operators";
import {PlaylistService} from "../../services/playlist/playlist.service";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, OnDestroy, OnChanges{

  @Output()
  toggleDrawer = new EventEmitter<any>();//появляется плейлист

  song: Song;
  state: StreamState;
  currentFile: Song;
  isVolumeChanging: string = "hidden";
  showPlaylist: boolean = false;
  volume: number = 0.3;
  componentName: string = "player-component";
  playlist: Playlist;
  index: number;

  private clicks = new Subject();
  private subscription: Subscription;
  private isUserAuthorized: boolean = false;
  public playlists: Playlist[] = [];

  constructor(
    public audioService: AudioService,
    private authService: AuthService,
    private playerStateService: PlayerStateService,
    private playlistService: PlaylistService
  ) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    this.restoreVolume();
  }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(400)
    ).subscribe(e => this.toggleDrawer.emit());

    this.authService.userAuthorizedObservable$.pipe(skip(1)).subscribe(data => {
      this.isUserAuthorized = data;
      if (this.isUserAuthorized) {
        this.playlistService.getUserPlaylists().subscribe(data => {
          this.playlists = data;
        })
      }
    });

    this.playerStateService.playPlaylistObservable$.pipe(skip(1)).subscribe((data: {playlist: Playlist, indexInPlaylist: number, sender: string}) => {
      if (data.sender !== this.componentName) {
        console.log("play selected song from player");
        console.log(data);
        if (data && data.playlist && data.playlist.songs[data.indexInPlaylist]) {
          this.playSongFromPlaylist(data.playlist, data.indexInPlaylist);
        }
      }
    });

    this.playerStateService.pauseCurrentSongObservable$.pipe(skip(1)).subscribe((sender: string) => {
      //TODO implement method for stopping current song
      if (sender !== this.componentName) {
        this.pauseCurrentSong();
        console.log("pause selected song from player");
      }
    });

    this.playerStateService.resumeCurrentSongObservable$.pipe(skip(1)).subscribe((sender: string) => {
      //TODO implement method fore resuming current song
      if (sender !== this.componentName) {
        this.resumeCurrentSong();
        console.log("resume selected song from player");
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  //TODO REMOVE
  ngOnChanges(changes: SimpleChanges): void {
  }

  private restoreVolume(defaultVolume : number = 0.3){
    this.volume = Number(localStorage.getItem("playerVolume") || defaultVolume);
    this.audioService.volume =  this.volume * this.volume;
  }

  public playSongFromPlaylist(playlist: Playlist, index: number) {
    this.song = playlist.songs[index];
    this.playlist = playlist;
    this.index = index;
    this.playStream(this.song.url);
  }

  public resumeCurrentSong() {
    this.audioService.play();
  }

  public pauseCurrentSong() {
    this.audioService.pause();
  }

  public toggleClick(): void {
    this.clicks.next();
  }

  @HostListener('document:keydown.space')
  spaceHandler(event: KeyboardEvent) {
    if(this.state.playing)
      this.pause();
    else
    {
      if(!this.state.error)
        this.play();
    }
  }

  get songImage() : string {
    return  (this.song && this.song.picture_url) || 'https://miraman.ru/imagetransform/quality_95_width_1920_height_1080_fit_2/uploads/protected/000/000/030/186.jpg';
  }

  get volumeIcon() : string {
    if(this.volume > 0.3) return "volume_up";
    if(this.volume <= 0.3 && this.volume > 0) return "volume_down";
    return "volume_mute";
  }

  // get playlists(){
  //   return [
  //     {id:1, name:"Favorite"},
  //     {id:2, name:"Sport"},
  //     {id:3, name:"Work"},
  //     {id:4, name:"Study"},
  //     {id:5, name:"Runnig"},
  //     {id:6, name:"Rock"},
  //     {id:7, name:"Rap"},
  //     {id:8, name:"Jazz"},
  //     {id:9, name:"Pop"},
  //     {id:10, name:"Party"},
  //     {id:11, name:"Relax"},
  //   ]
  // }

  isFirstPlaying() {
    if(this.song)
      return this.index === 0;
  }

  isLastPlaying() {
    if(this.song)
      return this.index === this.playlist.songs.length - 1;
  }

  playStream(url) {
    this.audioService.stop();
    this.audioService.playStream(url).subscribe((events : Event) => {
      if(events.type == "ended")
      {
        if(!this.isLastPlaying())
          this.next();
        else
        {
          this.playStream(this.song.url);
          this.pause()
        }
      }
    });
  }

  pause() {
    this.audioService.pause();
    this.playerStateService.pauseCurrentSong.next(this.componentName);
  }

  play() {
    if(this.song)
    {
      this.audioService.play();
      this.playerStateService.resumeCurrentSong.next(this.componentName);
    }
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    this.audioService.stop();
    this.changeSongIndex(this.index + 1)
  }

  previous() {
    this.audioService.stop();
    this.changeSongIndex(this.index - 1)
  }

  public changeSongIndex(index: number): void {
    const data = {
      playlist: this.playlist,
      indexInPlaylist: index,
      sender: this.componentName
    };
    console.log(data)
    this.playerStateService.playPlaylist.next(data);

    this.index = index;
    this.song = this.playlist.songs[index];
    this.playStream(this.song.url);
  }


  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  // volume section

  onVolumeSliderChangeEnd(change) {
    this.volume = change.value;
    localStorage.setItem("playerVolume", this.volume.toString());
    this.audioService.volume = change.value * change.value;
  }

  onChangeVolume() {
    this.isVolumeChanging = (this.isVolumeChanging == "hidden") ? "visible" : "hidden";
  }

  // user features section

  showCurrentPlaylist() {
    this.showPlaylist = false;
    this.clicks.next();
    //TODO: SHOW CURRENT PLAYLIST
  }

  showAvailiblePlaylists() {
    this.showPlaylist = !this.showPlaylist;
    //TODO: SHOW USERS PLAYLIST AND ADD POSSIBILITY TO ADD SONGS TO THEM
  }

  addToSelectedPlaylist(playlist:any) {
    console.log(playlist)
    alert(`song has been added to the playlist ${playlist.name}`)
  }

}
