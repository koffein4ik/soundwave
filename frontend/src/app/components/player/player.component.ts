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

  private clicks = new Subject();
  private subscription: Subscription;

  files: Array<any> = [
    {
      image : "https://avatars.yandex.net/get-music-content/163479/44311ba4.a.9152807-1/200x200",
      url:
        "https://ia801504.us.archive.org/3/items/EdSheeranPerfectOfficialMusicVideoListenVid.com/Ed_Sheeran_-_Perfect_Official_Music_Video%5BListenVid.com%5D.mp3",
      name: "Perfect",
      artist: " Ed Sheeran"
    },
    {
      image : null,
      url:
        "http://localhost:3000/songs/tetssong.mp3",
      name: "Loly bomp",
      artist: "Little big"
    }
  ];

  state: StreamState;
  currentFile: any = {};
  isVolumeChanging: string = "hidden";

  constructor(
    public audioService: AudioService,
  ) {
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    //TODO: save player volume in local storage and restore it
    this.audioService.volume = 0.3;
  }

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(300)
    ).subscribe(e => this.toggleDrawer.emit());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.song) {
      console.log('song changed or continued');
    }
    if (changes.currentSongStopped) {
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
    return  (this.currentFile.file && this.currentFile.file.image) || 'https://miraman.ru/imagetransform/quality_95_width_1920_height_1080_fit_2/uploads/protected/000/000/030/186.jpg';
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {});
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
    this.stopCurrentSong.emit();
  }

  play() {
    console.log("play")
    if(this.currentFile.index == null && this.files.length != 0)//remove
      this.openFile(this.files[0], 0);
    else
      this.audioService.play();

    this.playCurrentSong.emit();
  }

  stop() {
    this.audioService.stop();
    this.stopCurrentSong.emit();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
    this.playNextSong.emit();
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
    this.playPreviousSong.emit();
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  onVolumeSliderChangeEnd(change) {
    this.audioService.volume = change.value * change.value;
  }

  onChangeVolume() {
    this.isVolumeChanging = this.isVolumeChanging == "hidden" ? "visible" : "hidden";
  }

  showCurrentPlaylist() {
    this.clicks.next();
    //TODO: SHOW CURRENT PLAYLIST
  }

  addToPlaylist() {
    //TODO: SHOW USERS PLAYLIST AND ADD POSSIBILITY TO ADD SONGS TO THEM
  }
}
