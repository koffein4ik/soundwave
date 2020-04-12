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

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent implements OnInit, OnDestroy, OnChanges{

  @Output()
  toggleDrawer = new EventEmitter<any>();//появляется плейлист

  @Output()
  stopCurrentSong = new EventEmitter<any>();//

  @Output()
  playCurrentSong = new EventEmitter<any>();

  @Output()
  playNextSong = new EventEmitter<any>();

  @Output()
  playPreviousSong = new EventEmitter<any>();

  @Input()
  song: Song;

  @Input()
  currentSongStopped: boolean;

  @Input()
  currentSongIndex: number;

  @Input()
  songPlaylistSize: number;

  state: StreamState;
  currentFile: Song;
  isVolumeChanging: string = "hidden";
  showPlaylist: boolean = false;
  volume: number = 0.3;

  private clicks = new Subject();
  private subscription: Subscription;

  constructor(
    public audioService: AudioService,
  ) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    this.volume = Number(localStorage.getItem("playerVolume") || 0.3);
    this.audioService.volume =  this.volume * this.volume;
  }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(400)
    ).subscribe(e => this.toggleDrawer.emit());

    console.log("init");
  }

  ngOnDestroy() {
    alert("destroy")
    localStorage.setItem("playerVolume", this.volume.toString());
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change");
    console.log(changes);
    if (changes.song) {
      this.playStream(changes.song.currentValue.songURL);
      console.log('song changed or continued');
    }
    if (changes.currentSongStopped) {
      if(changes.currentSongStopped.currentValue)
        this.pause();
      else
      {
        this.play();
      }
      console.log(changes.currentSongStopped);
    }
  }

  public toggleClick(): void {
    this.clicks.next();
  }

  @HostListener('document:keydown.space')
  spaceHandler(event: KeyboardEvent) {
    if(this.state.playing)
      this.pause()
    else
    {
      if(!this.state.error)
        this.play()
    }
  }

  get songImage() : string {
    return  (this.song && this.song.album && this.song.album.pictureURL) || 'https://miraman.ru/imagetransform/quality_95_width_1920_height_1080_fit_2/uploads/protected/000/000/030/186.jpg';
  }

  get volumeIcon() : string {
    if(this.volume > 0.3) return "volume_up";
    if(this.volume <= 0.3 && this.volume > 0) return "volume_down";
    return "volume_mute";
  }

  get playlists(){
    return [
      {id:1, name:"Favorite"},
      {id:2, name:"Sport"},
      {id:3, name:"Work"},
      {id:4, name:"Study"},
      {id:5, name:"Runnig"},
      {id:6, name:"Rock"},
      {id:7, name:"Rap"},
      {id:8, name:"Jazz"},
      {id:9, name:"Pop"},
      {id:10, name:"Party"},
      {id:11, name:"Relax"},
    ]
  }

  isFirstPlaying() {
    return this.currentSongIndex === 0;
  }

  isLastPlaying() {
    return this.currentSongIndex === this.songPlaylistSize - 1;
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
          this.stop();
          this.playStream(this.song.songURL);        
        }
      }
    });
  }

  pause() {
    this.audioService.pause();
    this.stopCurrentSong.emit();
  }

  play() {
    console.log("play")
    if(this.song)
    {
      this.audioService.play();
      this.playCurrentSong.emit();
    }
  }

  stop() {
    this.audioService.stop();
    this.stopCurrentSong.emit();
  }

  next() {
    this.audioService.stop();
    this.playNextSong.emit();
  }

  previous() {
    this.audioService.stop();
    this.playPreviousSong.emit();
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  onVolumeSliderChangeEnd(change) {
    this.volume = change.value;
    localStorage.setItem("playerVolume", this.volume.toString());
    this.audioService.volume = change.value * change.value;
  }

  onChangeVolume() {
    this.isVolumeChanging = this.isVolumeChanging == "hidden" ? "visible" : "hidden";
  }

  showCurrentPlaylist() {
    this.clicks.next();
    //TODO: SHOW CURRENT PLAYLIST
  }

  showAvailiblePlaylists() {
    this.showPlaylist = !this.showPlaylist;
    //TODO: SHOW USERS PLAYLIST AND ADD POSSIBILITY TO ADD SONGS TO THEM
  }

  addToSelectedPlaylist(playlist:any) {
    console.log(playlist)
  }
}
