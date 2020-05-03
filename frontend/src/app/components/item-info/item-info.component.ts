import {Component, Input, OnInit} from '@angular/core';
import {Song} from "../../models/song.model";
import {Album} from "../../models/album.model";
import {Playlist} from "../../models/playlist.model";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.less']
})
export class ItemInfoComponent implements OnInit{

  @Input()
  name: string;

  @Input()
  pictureURL: string;

  @Input()
  songs: Song[];

  @Input()
  albums: Album[];

  public playlist: Playlist;

  constructor() { }

  public ngOnInit(): void {
    this.songs.forEach(song => {
      song.url = ConstantsEnum.backURL + ConstantsEnum.songs + song.url;
      song.picture_url = ConstantsEnum.backURL + ConstantsEnum.images + ConstantsEnum.songs + song.picture_url;
    });
    if(this.albums) {
      this.albums.forEach(album => {
        album.pictureURL = ConstantsEnum.backURL + ConstantsEnum.images + "album/" + album.pictureURL;
      });
    }
    console.log(this.pictureURL);
    this.playlist =  {
      id: 0,
      name: this.name + '-info',
      songs: this.songs,
      pictureURL: this.pictureURL
    }
  }
}
