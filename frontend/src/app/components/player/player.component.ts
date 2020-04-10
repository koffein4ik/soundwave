import { Component, HostListener } from "@angular/core";
import { AudioService } from "../../services/audio/audio.service";
import { StreamState } from "../../interfaces/stream-state";
import { style } from '@angular/animations';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.less']
})
export class PlayerComponent {

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
    // listen to stream state
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });

    this.audioService.seekVolumeTo(0.3);
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
  
  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  playStream(url) {
    this.audioService.playStream(url).subscribe(events => {
      // listening for fun here
    });
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  pause() {
    this.audioService.pause();
  }

  play() {
    console.log("play")
    if(this.currentFile.index == null && this.files.length != 0)//remove
      this.openFile(this.files[0], 0);
    else
      this.audioService.play();
  }

  stop() {
    this.audioService.stop();
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }

  onVolumeSliderChangeEnd(change) {
    this.audioService.seekVolumeTo(change.value * change.value);
  }

  onChangeVolume()
  {
    this.isVolumeChanging = this.isVolumeChanging == "hidden" ? "visible" : "hidden";
  }

}
