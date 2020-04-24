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
  private fileReader: FileReader = new FileReader();

  constructor(private playlistService: PlaylistService) { }

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
  }


}
