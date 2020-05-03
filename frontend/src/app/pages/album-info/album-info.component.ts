import { Component, OnInit } from '@angular/core';
import {AlbumService} from "../../services/album/album.service";
import {Album} from "../../models/album.model";
import {Song} from "../../models/song.model";
import {ActivatedRoute} from "@angular/router";
import {ConstantsEnum} from "../../constants/ConstantsEnum";

@Component({
  selector: 'app-album-info',
  templateUrl: './album-info.component.html',
  styleUrls: ['./album-info.component.less']
})
export class AlbumInfoComponent implements OnInit {

  public album: Album;
  public songs: Song[];

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.albumService.getAlbumById(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      console.log(data);
      this.album = data.album;
      this.album.pictureURL = ConstantsEnum.backURL + ConstantsEnum.images + "album/" + this.album.pictureURL;
      this.songs = data.songs;
    })

  }

}
