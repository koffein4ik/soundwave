import {Component, OnInit} from '@angular/core';
import {PlaylistService} from "../../services/playlist/playlist.service";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.less']
})
export class CreatePlaylistComponent implements OnInit {

  private picture: File;
  private fileBase64Encoded: any;
  private base64Background: string | ArrayBuffer;
  private fileReader: FileReader = new FileReader();

  constructor(private playlistService: PlaylistService) { }

  get songImage() {
    return  this.base64Background || 'https://www.novonordiskmedical.com/content/dam/medical/novonordiskmedical/images/question-mark-large.png';
  }

  public ngOnInit(): void {
  }

  public onClickSubmit(name: any): void {
    this.fileReader.onloadend = (e) => {
      this.fileBase64Encoded = this.fileReader.result;
      this.playlistService.createNewPlaylist(name, this.fileBase64Encoded).subscribe(() => {
        this.onSuccessCreate();
      });
    };
    if (this.picture) {
      this.fileReader.readAsDataURL(this.picture);
    } else {
      this.playlistService.createNewPlaylist(name, this.fileBase64Encoded).subscribe(() => {
        this.onSuccessCreate();
      });
    }
  }

  public onSuccessCreate():void {
    console.log("Success");
  }

  public onFileChosen(file: File): void {
    console.log(file);
    this.picture = file;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => { 
      this.base64Background = reader.result
    };
  }

  public onFileCanceled(): void {
    this.picture = null;
    this.base64Background = null
  }


}
